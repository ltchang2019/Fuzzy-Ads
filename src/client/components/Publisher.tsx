import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Divider, Icon } from 'semantic-ui-react';
import Web3 from 'web3';
import { getSessionCookie } from '../../sessions';

let web3: Web3 | undefined = undefined;
class Publisher extends Component {
    state = {
        auth: false,
        myListings: []
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

        const listings = await fetch('https://rinkeby-api.opensea.io/api/v1/assets/?asset_contract_address=0x917272555bcf446d693649c30ff8d268315744bc&asset_contract_addresses=%5B%5D&format=json&limit=20&offset=0&order_direction=desc');
        const jsonListings = (await listings.json()).assets;

        //REPLACE WITH ACTUAL USER
        const filteredListings = jsonListings.filter((token: any) => token.owner.address === "0xeb65b09e73d74b6ef526cf14359e8a2589ea0fbb");
        this.setState({ myListings: filteredListings });
        console.log(this.state);
    }

    listMySlots() {
        const { myListings } = this.state;
        const items = myListings.map((token: any) => {
            return {
                raised: true,
                image: token.image_url,
                header: token.name,
                meta: (
                    `${token.traits[2].trait_type} ${token.traits[2].value}, 
                    ${token.traits[3].trait_type} ${token.traits[3].value}`
                    ),
                description: token.description,
                href: token.permalink
            }
        });
        return <Card.Group items={items} />;
    }

    listings = () => {
        return (
            <div>
                {this.listMySlots()}
            </div>
        );
    }

    authenticatedComponent = () => {
        return (
            <div>
                <Link to='/user/new-slot'>
                    <Button
                        color='teal'
                        icon='add'
                        labelPosition='left'
                        content='Create New Listing'
                    />
                </Link>

                <Divider horizontal />

                {this.listings()}
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