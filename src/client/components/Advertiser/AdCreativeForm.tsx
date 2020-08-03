import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";

const IPFS = require('ipfs');

const { abi } = require('../../ethereum/build/Ad.json');
const contractAddress = "0x8d1d1467fe47f5ee1d923033117de927d91d1124";

let node: any;
function AdCreativeForm() {   
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [redirectUrl, setRedirectUrl] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);

    const { library, account } = useWeb3React();
    const contract = new Contract(contractAddress, abi, library.getSigner());

    async function publish() {
        const node = await IPFS.create({ silent: true });
        const file = await node.add({
            content: JSON.stringify({
                title: title,
                description: description,
                redirectUrl: redirectUrl,
                imageUrl: imageUrl
            })
        });

        const hash = file.path;
        console.log(`Link: https://gateway.ipfs.io/ipfs/${hash}`);
        
        contract.getMetadata(11).then(console.log);

        console.log("FINISHED");
    }

    return (
        <div>
            <Form onSubmit={() => publish()} style={{ marginTop: 20 }}>
                <Form.Field>
                    <label>Ad Title</label>
                    <Input 
                        placeholder='title'
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Ad Description</label>
                    <Input 
                        placeholder='description'
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Redirect URL</label>
                    <Input 
                        placeholder='redirect url'
                        value={redirectUrl}
                        onChange={event => setRedirectUrl(event.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Displayed Image URL</label>
                    <Input 
                        placeholder='image url'
                        value={imageUrl}
                        onChange={event => setImageUrl(event.target.value)}
                    />
                </Form.Field>

                <Button primary loading={loading}>Submit Changes</Button>
            </Form>
        </div>
    );
}

export default AdCreativeForm;