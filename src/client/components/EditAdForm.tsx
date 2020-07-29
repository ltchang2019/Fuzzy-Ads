import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import { useWeb3Context } from 'web3-react';
import AdCreativeForm from './AdCreativeForm';
const IPFS = require('ipfs');

let node: any;
class EditAdForm extends Component {
    render() {
        return (
            <div>
                <AdCreativeForm />
            </div>
        );
    }
}

export default EditAdForm;