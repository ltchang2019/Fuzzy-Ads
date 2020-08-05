import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Form, Input, Button } from 'semantic-ui-react';
import { useWeb3React } from "@web3-react/core";
import { Contract } from "@ethersproject/contracts";

const IPFS = require('ipfs');

const { abi } = require('../../ethereum/build/Ad.json');
const contractAddress = "0x8d1d1467fe47f5ee1d923033117de927d91d1124";

let node: any;
function AdCreativeForm(props: any) {   
    const [title, setTitle] = useState("Coca Cola");
    const [description, setDescription] = useState("Taste the feeling.");
    const [redirectUrl, setRedirectUrl] = useState("coca-cola.com");
    const [imageUrl, setImageUrl] = useState("https://lh3.googleusercontent.com/proxy/RfEnFQ_UEkmEvtuWDfLagj2Ttiu_JLhsTb3GTcDMis_8XWAcY3_6plKnIFjTwo_Y25hxDiS7VB3jlxgqzO4bxdpmHKwS5hW_JwuwTTHLlZpWlWnIEcpPhcRiwRTkyjaIyq33_PK8UZqAroyaYbKS27QvC4M4Em8");
    const [loading, setLoading] = useState(false);

    const { library, account } = useWeb3React();
    const contract = new Contract(contractAddress, abi, library.getSigner());
    const { id } = useParams(); 

    console.log(props)

    async function publish() {
        setLoading(true);
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
        const url = `https://gateway.ipfs.io/ipfs/${hash}`;
        console.log(url);
        
        await contract.setMetadata(id, url);

        setLoading(false);
        console.log("finished");
    }

    return (
        <div style={{width: '40%', textAlign: 'left'}}>
            <Form onSubmit={() => publish()} style={{ marginTop: 20 }}>
                <Form.Field>
                    <label>Title</label>
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

                <Button color='orange' floated='right' loading={loading}>Submit Changes</Button>
            </Form>
        </div>
    );
}

export default AdCreativeForm;