import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Web3 from 'web3';

let web3: Web3 | undefined = undefined;
class Publisher extends Component {
    state = {
        auth: false
    }

    async componentDidMount() {
        try {
            await (window as any).ethereum.enable();
            web3 = new Web3((window as any).ethereum);
        } catch (error) {
            window.alert('You need to allow MetaMask.');
            return;
        }
        
        let userCookie = document.cookie;
        const user = await web3.eth.getCoinbase();
        if(userCookie && user === userCookie) {
            this.setState({ auth: true })
        }
        console.log(this.state.auth);
    }

    listings = () => {
        return (
            <div>Listings</div>
        );
    }

    authenticatedComponent = () => {
        return (
            <div>
                {this.listings()}
                <Link to='/new-slot'>
                    <Button primary>
                        Create New Listing                    
                    </Button>
                </Link>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.state.auth ? this.authenticatedComponent() : <div>Please Log In</div>}
            </div>
        );
    }
}

export default Publisher;