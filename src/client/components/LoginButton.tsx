import React, { useState, useEffect } from 'react';
import { Button } from 'semantic-ui-react';
import Web3 from 'web3';
import { useHistory } from "react-router-dom";
import { getSessionCookie, setSessionCookie, removeSessionCookie } from '../../sessions';

let web3: Web3 | undefined = undefined;

function LoginButton() {
  const [account, setAccount] = useState("");
  const [loggedIn, setLogin] = useState(false);
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
            
            const currAccount = await web3.eth.getCoinbase();
            setLogin(getSessionCookie()._id === currAccount);
            setAccount(currAccount);
        }

        loadAccount();
    });

    async function handleClick() {
        if(account && getSessionCookie()._id !== account) {
            fetch(`http://localhost:5000/exists/${account}`)
                .then(response => response.json())
                .then(userInfo => handleSignMessage(userInfo))
        } else {
            removeSessionCookie();
            setLogin(false);
            history.push('/');
            window.location.reload();
        }
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
                setSessionCookie({ _id });
                setLogin(true);
                history.push('/');
                window.location.reload();
                console.log("Cookie Set: ", getSessionCookie()._id);
                console.log("State: ", account);
            }
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
          {loggedIn ? "Logout" : "Login With MetaMask"}
        </Button>
      </div>
    )
}

export default LoginButton;