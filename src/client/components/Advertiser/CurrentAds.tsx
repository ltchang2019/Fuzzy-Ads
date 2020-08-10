import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useWeb3React } from "@web3-react/core";
import { Card, Button, Icon } from 'semantic-ui-react';
import { Contract } from "@ethersproject/contracts";

const { abi } = require('../../../ethereum/build/Ad.json');
const contractAddress = "0x8d1d1467fe47f5ee1d923033117de927d91d1124";

type card = {
    raised: boolean,
    image: HTMLElement,
    header: string,
    meta: string,
    description: string,
    extra: HTMLElement
}

function CurrentAds() {
    const { library, account } = useWeb3React();
    const contract = new Contract(contractAddress, abi, library.getSigner());
    const [listings, setListings] = useState([]);

    useEffect(() => {
        async function loadItems() {
            const result = await fetch('https://rinkeby-api.opensea.io/api/v1/assets/?asset_contract_address=0x8d1d1467fe47f5ee1d923033117de927d91d1124&asset_contract_addresses=%5B%5D&order_direction=desc&offset=0&limit=20');
            const jsonResult = (await result.json()).assets;
            const filteredListings = await jsonResult.filter((token: any) => token.owner.address === account?.toLowerCase());
            const items: any = await Promise.all(filteredListings.map(async(token: any) => {
                const metadataURL = await contract.getMetadata(token.token_id);
                const metadataFetch = await fetch(metadataURL);
                const contentType = metadataFetch.headers.get("content-type");

                let jsonMetadata;
                if(contentType && contentType.indexOf("application/json") !== -1) {
                    jsonMetadata = await metadataFetch.json();
                } else {
                    jsonMetadata = {
                        title: "Title",
                        description: "Description",
                        imageUrl: "Image URL",
                        redirectUrl: "Redirect URL"
                    };
                }

                return {
                    raised: true,
                    image: <img src={jsonMetadata.imageUrl} style={{maxHeight: '250px'}}></img>,
                    header: jsonMetadata.title,
                    meta: (
                        <text>
                            {`Starts: ${new Date(token.traits[2].value * 1000).toLocaleString()}`}
                            <br />
                            {`Ends: ${new Date(token.traits[3].value * 1000).toLocaleString()}`}
                        </text>
                    ),
                    description: jsonMetadata.description,
                    extra: (
                        <Link to={`/advertiser/ad-creative-form/${token.token_id}`}>
                            <Button 
                                className='ui orange button'                         
                                color='orange'
                                fluid
                            >
                                <Icon name='edit' />
                                Edit Your Ad Creative
                            </Button>
                        </Link>
                    )
                }
            }));
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

export default CurrentAds;