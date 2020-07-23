import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
require('embeddable-nfts');
//text fields for title, redirect url, creative (url form?)

const length = 2;

class EditAdForm extends Component {
    async componentDidMount() {
        // const listings = await fetch('https://rinkeby-api.opensea.io/api/v1/assets/?asset_contract_address=0x917272555bcf446d693649c30ff8d268315744bc&asset_contract_addresses=%5B%5D&format=json&limit=20&offset=0&order_direction=desc');
        // console.log(listings);
    }

    async renderList() {
        const listings = await fetch('https://rinkeby-api.opensea.io/api/v1/assets/?asset_contract_address=0x917272555bcf446d693649c30ff8d268315744bc&asset_contract_addresses=%5B%5D&format=json&limit=20&offset=0&order_direction=desc');
        return <p>{listings}</p>
    }

    render() {
        return (
            <div>
                <div>Edit Advertisement</div>
                {this.renderList}
            </div>
        );
    }
}

export default EditAdForm;