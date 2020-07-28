import React, { Component } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';

class TokenList extends Component {
    state = {
        auth: false,
        listings: []
    }

    async componentDidMount() {
        const listings = await fetch('https://rinkeby-api.opensea.io/api/v1/assets/?asset_contract_address=0x917272555bcf446d693649c30ff8d268315744bc&asset_contract_addresses=%5B%5D&format=json&limit=20&offset=0&order_direction=desc');
        const jsonListings = await listings.json();
        this.setState({ listings: jsonListings.assets });
    }

    listSlots() {
        const { listings } = this.state;
        const items = listings.map((token: any) => {
            return {
                raised: true,
                image: token.image_url,
                header: token.name,
                meta: (
                    `${token.traits[2].trait_type} ${token.traits[2].value}, 
                    ${token.traits[3].trait_type} ${token.traits[3].value}`
                    ),
                description: token.description,
                href: token.permalink,
                extra: (
                    <Button 
                        className='ui teal button' 
                        href={token.permalink}                         
                        color='teal'
                        fluid
                    >
                        <Icon name='shopping cart' />
                        Buy/Learn More
                    </Button>
                )
            }
        });
        return <Card.Group items={items} itemsPerRow={4}/>;
    }

    render() {
        return (
            <div>
                {this.listSlots()}
            </div>
        );
    }
}

export default TokenList;