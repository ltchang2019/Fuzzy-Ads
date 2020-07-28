declare global {
    interface Window { web3: Web3; }
}

window.web3 = window.web3 || {};

declare module 'react-web3-provider';