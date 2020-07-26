import React, { Component } from 'react';
import Web3 from 'web3';

let web3: Web3 | undefined = undefined;
class Publisher extends Component {
    state = {
        message: "Please sign in."
    }

    async componentDidMount() {
        try {
            await (window as any).ethereum.enable();
            web3 = new Web3((window as any).ethereum);
        } catch (error) {
            window.alert('You need to allow MetaMask.');
            return;
        }
        
        let userCookie = document.cookie;
        const user = await web3.eth.getCoinbase();
        if(userCookie && user === userCookie) {
            this.setState({ message: "Hello Publisher" })
        }
    }

    render() {
        return <div>{this.state.message}</div>;
    }
}

export default Publisher;