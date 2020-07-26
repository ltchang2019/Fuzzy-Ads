import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <Menu style={{marginTop: '10px'}} color='orange' secondary>
                <Menu.Header>
                    <Link to="/">
                        <a className="item">
                            <img src="https://ipfs.io/ipfs/QmVprAMVkhWoiMsTpTbY7amoM96w1syCXYXjFgyvwsJLoa" style={{width: 100, height: 100}}></img>
                        </a>
                    </Link>
                </Menu.Header>
    
                <Menu.Item
                    name='listings'
                >
                    <Link to="/">
                        <a className="item">
                            <h2>My Listings</h2>
                        </a>   
                    </Link>
                </Menu.Item>

                <Menu.Item
                    name='purchase'
                >
                    <Link to="/">
                        <a className="item">
                            <h2>Purchase Slots</h2>
                        </a>   
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Header;