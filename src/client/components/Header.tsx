import React, { useState, useEffect } from 'react';
import { Menu } from 'semantic-ui-react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useWeb3React } from "@web3-react/core";
import PublisherSwitch from '../assets/images/switch-publisher.png';
import AdvertiserSwitch from '../assets/images/switch-advertiser.png';
import '../assets/style/style.css';

var toggle;
function Header({ type }: any | undefined) {
    const { account } = useWeb3React();

    if(type.includes('/advertiser')) {
        toggle = (
            <div style={{marginTop: '-30px'}}>
                <a href='/publisher'>
                    <img src={AdvertiserSwitch} style={{width: '30%', height: '50px'}}></img> 
                </a>
            </div>
        );
    } else if(type.includes('/publisher')) {
        toggle = (
            <div style={{marginTop: '-30px'}}>
                <a href='/advertiser' style={{marginTop: '-30px'}}>
                    <img src={PublisherSwitch} style={{width: '30%', height: '50px'}}></img> 
                </a>
            </div>
        );
    } else {
        toggle = <div></div>;
    }


    function metamaskComponent() {
        const accountString = `${account?.toLowerCase().slice(0,8)}...${account?.toLowerCase().slice(35, 41)}`
        return (
            <div className="aligned"> 
                <svg className="icon-metamask"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.7 20.7">
                    <circle cx="10.3" cy="10.3" r="10.3" fill="#606060"/><path d="M15.9 16c-.1 0-.2 0-.3-.1-.2-.1-.5-.1-.7-.2-.4-.1-.7-.2-1.1-.3-.2 0-.3-.1-.5-.1-.1 0-.2 0-.3.1-.2.2-.4.3-.7.5-.2.2-.5.3-.7.5-.1.1-.2.1-.3.2H9.5c-.1 0-.2-.1-.4-.1-.3-.2-.7-.5-1-.7-.2-.1-.3-.3-.5-.4-.1-.1-.2-.1-.3-.1-.2.1-.4.1-.6.2-.2 0-.3.1-.5.1-.2.1-.4.1-.6.2-.2.1-.4.1-.6.2-.2 0-.3.1-.4-.1-.1-.1-.1-.2-.1-.3-.1-.2-.1-.4-.2-.6-.1-.2-.1-.5-.2-.7-.1-.2-.1-.5-.2-.7 0-.1-.1-.2-.1-.4v-.1c.1-.3.2-.5.3-.8l.3-.9.3-.9v-.4c0-.1-.1-.2-.1-.2-.2-.2-.3-.4-.3-.7 0-.2-.1-.3-.1-.5s-.1-.3-.1-.5C4 8.1 4 7.9 4 7.7s-.1-.3-.1-.5-.1-.4-.1-.5c0-.2-.1-.3-.1-.5v-.4c0-.3.1-.5.2-.8.1-.2.1-.5.2-.7 0-.1.2-.3.5-.2l.9.3c.5.3 1 .4 1.5.6.2.1.4.2.7.3l.9.3h3.5c.1 0 .2-.1.4-.1.4-.1.7-.3 1-.4.4-.2.8-.3 1.3-.5.4-.2.8-.3 1.3-.5.1 0 .1-.1.2-.1s.3.1.4.2c.1.2.1.4.2.6l.3.9v.1c.1.1 0 .2 0 .3 0 .2-.1.4-.1.6 0 .2-.1.3-.1.5 0 .1 0 .2-.1.3 0 .2-.1.4-.1.7 0 .2-.1.4-.1.5 0 .2-.1.4-.1.6 0 .2-.1.3-.1.5 0 .1 0 .1-.1.2s-.1.2 0 .3c.1.3.2.5.3.8.1.4.2.7.3 1.1.1.2.2.5.2.7v.1l-.3.9c0 .2-.1.3-.1.5s-.1.3-.1.5c-.1.2-.1.5-.2.7-.3.4-.4.4-.6.4zm-3.1-6.9s.1 0 .1.1c.1 0 .1.1.2.1s.2.1.3.1c.3.1.7.2 1 .3.4.1.7.2 1.1.3.2 0 .2 0 .3-.2 0-.2.1-.4.1-.6.1-.1.1-.2.1-.3 0-.2.1-.3.1-.5s.1-.4.1-.5c.1-.2.1-.5.2-.7.1-.2.1-.4.2-.7 0-.1.1-.2.1-.3v-.1c0-.1-.1-.2-.1-.3-.1-.2-.1-.4-.2-.5-.1-.2-.2-.4-.2-.7 0-.1-.1-.1-.2-.1l-.1.1c-.3.2-.6.4-1 .6l-.9.6c-.5.3-1 .7-1.5 1-.3.2-.7.5-1 .7-.1.1-.1.2 0 .3.3.2.5.4.8.6.1 0 .1.1.2.1 0 .3.1.4.3.6 0-.1 0 0 0 0zm-5 .1c0-.1 0-.1 0 0 .4-.4.8-.7 1.2-1l.3-.3c.1-.1.1-.2 0-.3-.1 0-.2-.1-.4-.2-.1-.1-.3-.2-.5-.3-.3-.3-.6-.5-.9-.7-.4-.3-.8-.5-1.2-.8-.5-.3-.9-.6-1.4-1-.2-.1-.3-.1-.4.1-.1.2-.1.4-.2.7-.1.2-.2.4-.3.7v.4c0 .2.1.4.2.5.1.2.1.5.2.7.1.2.1.4.2.7 0 .2.1.4.1.6 0 .1.1.3.1.4 0 .2.1.3.1.5 0 .1.1.1.2.1.3-.1.5-.1.8-.2.2-.1.5-.1.7-.2.2-.1.4-.1.6-.2.2-.1.4-.1.6-.2-.1 0-.1 0 0 0zm2.5 5h-.6c-.1 0-.3 0-.4.1-.1 0-.1.1-.1.2v.1c0 .2 0 .4-.1.5 0 .1.1.2.2.2h1.8c.2 0 .2-.1.2-.3v-.1c0-.2 0-.3-.1-.5 0-.2-.2-.3-.4-.3 0 .1-.3.1-.5.1zm-1.2-1.8s.1 0 .1-.1.1-.1 0-.2-.2-.3-.3-.5c-.1-.1-.2-.2-.3-.1-.1 0-.1.1-.2.1-.1.1-.3.1-.4.2-.1 0-.1.1-.1.2s0 .1.1.2c.1 0 .1 0 .2.1.2.1.4.1.6.2 0-.1.1-.1.3-.1zm2.5 0c.1 0 .2-.1.2-.1.3-.1.5-.2.8-.2.1 0 .1-.1.1-.2 0 0-.1-.1-.1-.2-.2-.1-.5-.2-.7-.3-.1 0-.2 0-.3.1l-.3.6c.1.2.2.4.3.3z" fill="#fa0"/>
                </svg>
                
                <span>{account ? ` ${accountString}` : " Login To Metamask"}</span>

                <svg height="24" width="24">
                    <circle cx="12" cy="12" r="4" stroke="black" strokeWidth="1" fill={account ? "#00fa00" : "#fa0000"} />
                </svg>
            </div>
        );
    }
    
    return (
        <div style={{textAlign: 'center'}}>
            <Menu style={{marginTop: '10px'}} color='orange' secondary>
                <Menu.Item href='/'>
                    <img src="https://ipfs.io/ipfs/QmVprAMVkhWoiMsTpTbY7amoM96w1syCXYXjFgyvwsJLoa" style={{width: 100, height: 100}}></img>
                </Menu.Item>
                
                <Menu.Item position='right'>
                    {metamaskComponent()}
                </Menu.Item>
            </Menu> 

            {toggle}
        </div>
    );
}

export default Header;