import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './client/App';
import * as serviceWorker from './serviceWorker';
import { Web3ReactProvider } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { ethers } from "ethers";

interface App {
  injectedConnector: any
}

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    1, // Mainet
    3, // Ropsten
    4, // Rinkeby
    5, // Goerli
    42 // Kovan
  ],
});
const getLibrary = (provider: any) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
};

ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <App injectedConnector={injectedConnector} />
  </Web3ReactProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
