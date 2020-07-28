import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './client/App';
import * as serviceWorker from './serviceWorker';
import Web3 from 'web3';
import Web3Provider from 'web3-react'

import { Connectors } from 'web3-react'
const { InjectedConnector, NetworkOnlyConnector } = Connectors
 
const MetaMask = new InjectedConnector({ supportedNetworks: [1, 4] })
 
const Infura = new NetworkOnlyConnector({
  providerURL: 'https://rinkeby.infura.io/v3/60fecba8c2e443f9b1a6493537a3745e'
})
 
const connectors = { MetaMask, Infura }

ReactDOM.render(
  <Web3Provider
      connectors={connectors}
      libraryName={'web3.js'}
    >
    <App />
  </Web3Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
