import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { useWeb3Context } from 'web3-react';
const IPFS = require('ipfs');

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