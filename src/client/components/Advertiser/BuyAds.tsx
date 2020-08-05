import React, { useState, useEffect } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';

function BuyAds() {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        async function getListings() {
            const listings = await fetch('https://rinkeby-api.opensea.io/api/v1/assets/?asset_contract_address=0x8d1d1467fe47f5ee1d923033117de927d91d1124&asset_contract_addresses=%5B%5D&order_direction=desc&offset=0&limit=20');
            const jsonListings = await listings.json();
            setListings(jsonListings.assets);
        }

        getListings();
    }, []);

    function listSlots() {
        const items = listings.map((token: any) => {
            return {
                raised: true,
                header: token.name,
                meta: (
                    <text>
                        {`Starts: ${new Date(token.traits[2].value * 1000).toLocaleString()}`}
                        <br />
                        {`Ends: ${new Date(token.traits[3].value * 1000).toLocaleString()}`}
                    </text>
                ),
                description: token.description,
                href: token.permalink,
                extra: (
                    <Button 
                        className='ui orange button' 
                        href={token.permalink}                         
                        color='orange'
                        fluid
                    >
                        <Icon name='shopping cart' />
                        Buy/Learn More
                    </Button>
                )
            }
        });
        return <Card.Group items={items} itemsPerRow={2} />;
    }
    return (
        <div style={{maxWidth: '75%', maxHeight: '100%', overflowY: 'scroll', overflowX: 'hidden', padding: '10px'}}>
            {listSlots()}
        </div>
    );
}


// class BuyAds extends Component {
//     state = {
//         listings: []
//     }

//     async componentDidMount() {
//         const listings = await fetch('https://rinkeby-api.opensea.io/api/v1/assets/?asset_contract_address=0x8d1d1467fe47f5ee1d923033117de927d91d1124&asset_contract_addresses=%5B%5D&order_direction=desc&offset=0&limit=20');
//         const jsonListings = await listings.json();
//         this.setState({ listings: jsonListings.assets });
//     }

//     listSlots() {
//         const { listings } = this.state;
//         const items = listings.map((token: any) => {
//             return {
//                 raised: true,
//                 header: token.name,
//                 meta: (
//                     <text>
//                         {`Starts: ${new Date(token.traits[2].value * 1000).toLocaleString()}`}
//                         <br />
//                         {`Ends: ${new Date(token.traits[3].value * 1000).toLocaleString()}`}
//                     </text>
//                 ),
//                 description: token.description,
//                 href: token.permalink,
//                 extra: (
//                     <Button 
//                         className='ui orange button' 
//                         href={token.permalink}                         
//                         color='orange'
//                         fluid
//                     >
//                         <Icon name='shopping cart' />
//                         Buy/Learn More
//                     </Button>
//                 )
//             }
//         });
//         return <Card.Group items={items} itemsPerRow={2} />;
//     }

//     render() {
//         return (
//             <div style={{maxWidth: '75%', maxHeight: '100%', overflowY: 'scroll', overflowX: 'hidden', padding: '10px'}}>
//                 {this.listSlots()}
//             </div>
//         );
//     }
// }

export default BuyAds;