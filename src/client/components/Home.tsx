import React, { Component } from 'react';
import Web3 from 'web3';
import { getSessionCookie, setSessionCookie, removeSessionCookie } from '../../sessions';

let web3: Web3 | undefined = undefined;

class Home extends Component {
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
        
        let userCookie = getSessionCookie()._id;
        const user = await web3.eth.getCoinbase();
        if(userCookie && user === userCookie) {
            this.setState({ auth: true })
        }
    }

    render() {
        return (
            <div>
                {this.state.auth ? <div>Logged In</div> : <div>Please Log In</div>}
            </div>  
        );
    }
}

export default Home;