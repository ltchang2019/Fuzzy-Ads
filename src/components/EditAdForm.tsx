import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import Web3 from 'web3';
const IPFS = require('ipfs');
//when user submit's form, create ipfs/ipns page and upload data to that address
//call setMetadata function on contract to link ipfs url to tokenized space (this means that if an advertiser chooses to make a bunch of changes, its gonna be slow and cost gas)
//OR
//when token is minted, ipns page is automatically generated and linked to token
//when user enters info into UI form, data held @ ipns address is UPDATED (this means that we have to have keys for who can edit data on ipns page?)

//ipns address set up for user when token is minted
//submitting form will alter where ipns address points to

//ipns address is generated AFTER the user submits form and creates ipfs address for creative data

//ipfs name publish ties web page ipns address to peer id
//generate key-pair id pairing
//ipfs name publish -key=mykey <ipfs-hash> publishes ipfs content to https://ipfs.io/ipns/mykey
let node: any;
class EditAdForm extends Component {
    state = {
        title: "",
        description: "",
        redirectUrl: "",
        imageUrl: "",
        loading: false
    }

    async componentDidMount() {
        node = await IPFS.create({ silent: true });
    }

    async linkToIpns(cid: string) {
        const addr = `/ipfs/${cid}`;
        const res = await node.name.publish(addr);
        console.log(`IPNS address: http://gateway.ipfs.io/ipns/${res.name}`);
    }

    async publish() {
        console.log(this.state);
        const { title, description, redirectUrl, imageUrl } = this.state;
        const file = await node.add({
            content: JSON.stringify({
                title: title,
                description: description,
                redirectUrl: redirectUrl,
                imageUrl: imageUrl
            })
        });

        const hash = file.path;

        console.log("CID: ", hash);
        this.linkToIpns(hash);
    }

    render() {
        return (
            <div>
                <Form onSubmit={() => this.publish()} style={{ marginTop: 20 }}>
                    <Form.Field>
                        <label>Ad Title</label>
                        <Input 
                            placeholder='title'
                            value={this.state.title}
                            onChange={event => this.setState({ title: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Ad Description</label>
                        <Input 
                            placeholder='description'
                            value={this.state.description}
                            onChange={event => 
                                this.setState({ description: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Redirect URL</label>
                        <Input 
                            placeholder='redirect url'
                            value={this.state.redirectUrl}
                            onChange={event => 
                                this.setState({ redirectUrl: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Displayed Image URL</label>
                        <Input 
                            placeholder='image url'
                            value={this.state.imageUrl}
                            onChange={event => 
                                this.setState({ imageUrl: event.target.value })}
                        />
                    </Form.Field>

                    <Button primary loading={this.state.loading}>Submit Changes</Button>
                </Form>
            </div>
        );
    }
}

export default EditAdForm;