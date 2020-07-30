import React, { useState, useEffect } from 'react';
import { Menu } from 'semantic-ui-react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useWeb3React } from "@web3-react/core";
import MetamaskLogo from '../assets/images/metamask-logo.png';
import '../assets/style/style.css';

function Header() {
    const { account } = useWeb3React();

    function metamaskComponent() {
        const accountString = `${account?.toLowerCase().slice(0,8)}...${account?.toLowerCase().slice(35, 41)}`
        return (
            <div className="aligned"> 
                <img src={MetamaskLogo} style={{width: 24, height: 24}}></img>
                <span>{account ? ` ${accountString}` : " Login To Metamask"}</span>
                <svg height="24" width="24">
                <circle cx="12" cy="12" r="8" stroke="black" stroke-width="1" fill={account ? "#00fa00" : "#fa0000"} />
                </svg>
            </div>
        );
    }

    return (
        <Menu style={{marginTop: '10px'}} color='orange' secondary>
            <Menu.Item
                as={ Link }
                to='/'
            >
                <img src="https://ipfs.io/ipfs/QmVprAMVkhWoiMsTpTbY7amoM96w1syCXYXjFgyvwsJLoa" style={{width: 100, height: 100}}></img>
            </Menu.Item>

            <Menu.Item>
            <Dropdown>
                <Dropdown.Toggle variant='info' size='lg'>
                    Advertiser
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/user/token-list">Advertise on Fuzzy</Dropdown.Item>
                    <Dropdown.Item href="/user/timeslots">My Timeslots</Dropdown.Item>
                    <Dropdown.Item href="/user/current-ad">Current Performance</Dropdown.Item>
                    <Dropdown.Item href="/user/current-ad">Past Performance</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>

            <Menu.Item>
            <Dropdown>
                <Dropdown.Toggle variant='info' size='lg'>
                    Publisher
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Earnings History</Dropdown.Item>
                    <Dropdown.Item href="/user/ad-creative">How to Run Ads</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>

            <Menu.Item
                    as={ Link }
                    position='right'
                >
                    {metamaskComponent()}
            </Menu.Item>
        </Menu>
    );
}

export default Header;