import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import Web3 from 'web3';
import { useHistory } from "react-router-dom";

let web3: Web3 | undefined = undefined;

function LoginButton() {
  const [account, setAccount] = useState("");
  let history = useHistory();

  useEffect(() => {
    async function loadAccount() {
        try {
            await (window as any).ethereum.enable();
            web3 = new Web3((window as any).ethereum);
        } catch (error) {
            window.alert('You need to allow MetaMask.');
            return;
        }
            const account = await web3.eth.getCoinbase();
            setAccount(account);
        }
        loadAccount();
  });   

  async function handleClick() {
      console.log(account);
      fetch(`http://localhost:5000/exists/${account}`)
        .then(response => response.json())
        .then(userInfo => handleSignMessage(userInfo))
  }

  async function handleSignMessage(userInfo: any) {
    const { _id, nonce } = userInfo;
    const message = `I am signing my one-time nonce: ${nonce}`;
    try {
      const signature = await web3!.eth.personal.sign(message, _id, '');
      const res = await fetch(`http://localhost:5000/users/auth`, {
        body: JSON.stringify({ _id, signature }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });
      
      const result = await res.json(); 
      console.log(result);
      if(result && result.token) {
        document.cookie = _id;
      }

      history.push('/user/publisher');
      console.log("Client: ", document.cookie);
    } catch(err) {
      console.log(err.message)
      throw new Error('Invalid signature.');
    }
  }

    return (
      <div>
        <Button
          onClick={() => handleClick()}
          color='orange'
        >
          {account ? "Logout" : "Login With MetaMask"}
        </Button>
      </div>
    )
}

export default LoginButton;