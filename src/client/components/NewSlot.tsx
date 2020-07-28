import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';

class NewSlot extends Component {
    state = {
        title: "",
        description: "",
        logoUrl: "",
        loading: false
    }

    publishAdSpace() {
        //hit api to list tokenized space
        console.log("Space listed.")
    }

    render() {
        return (
            <div>
                <Form onSubmit={() => this.publishAdSpace()} style={{ marginTop: 20 }}>
                    <Form.Field>
                        <label>Website Title</label>
                        <Input 
                            placeholder='title'
                            value={this.state.title}
                            onChange={event => this.setState({ title: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Website Description</label>
                        <Input 
                            placeholder='description'
                            value={this.state.description}
                            onChange={event => 
                                this.setState({ description: event.target.value })}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Website Logo URL</label>
                        <Input 
                            placeholder='logo url'
                            value={this.state.logoUrl}
                            onChange={event => 
                                this.setState({ logoUrl: event.target.value })}
                        />
                    </Form.Field>

                    <Button primary loading={this.state.loading}>List Ad Space</Button>
                </Form>
            </div>
        );
    }
}

export default NewSlot;