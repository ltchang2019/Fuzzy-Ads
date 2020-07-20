import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Web3 from 'web3';

let web3: Web3 | undefined = undefined;
class Login extends Component {
  state = { account: "" };


  async componentDidMount() {
    try {
      await (window as any).ethereum.enable();
      web3 = new Web3((window as any).ethereum);
    } catch (error) {
      window.alert('You need to allow MetaMask.');
      return;
    }
    
    // account = await web3.eth.getCoinbase();
    this.setState({ account: ("0xc2eEC124f617aa6B17eFc22D4126CA65ce4A9DEb").toLowerCase() });
  }

  handleClick = async() => {
    const { account } = this.state;
    fetch(`http://localhost:5000/users/${account}`)
      .then(response => response.json())
      .then(this.handleSignMessage)
  }

  //shouldn't be of type <any>!!
  handleSignMessage = async (userInfo: any) => {
    const { _id, nonce } = userInfo;
    const message = `I am signing my one-time nonce: ${nonce}`;
    try {
      const signature = await web3!.eth.personal.sign(message, _id, '');
      
      fetch(`http://localhost:5000/users/auth`, {
        body: JSON.stringify({ _id, signature }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })
      .then(response => response.json())
      .then(console.log);

    } catch(err) {
      throw new Error('Invalid signature.');
    }
  }

  render() {
    return (
      <div>
        <h1>Fuzzy Ads</h1>
        <Button
          onClick={this.handleClick}
        >
          Login With MetaMask
        </Button>
      </div>
    )
  }
}

export default Login;