import React, { useState, useEffect } from 'react';
import { useWeb3React } from "@web3-react/core";
import { Card } from 'semantic-ui-react';


function MySlots() {
    const { account } = useWeb3React();
    const [listings, setListings] = useState([]);

    useEffect(() => {
        async function loadItems() {
            const result = await fetch('https://rinkeby-api.opensea.io/api/v1/assets/?asset_contract_address=0x8d1d1467fe47f5ee1d923033117de927d91d1124&asset_contract_addresses=%5B%5D&order_direction=desc&offset=0&limit=20');
            const jsonResult = (await result.json()).assets;
            const filteredListings = jsonResult.filter((token: any) => token.owner.address === account?.toLowerCase());
            const items = filteredListings.map((token: any) => {
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
            setListings(items);
        }

        loadItems();
    }, []);

    return (
        <div>
           <Card.Group items={listings} />
        </div>
    );
}

export default MySlots;