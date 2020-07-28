import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';

class Header extends Component {
    state = { active: 'home' }

    render() {
        const { active } = this.state;
        return (
            <Menu style={{marginTop: '10px'}} color='orange' secondary>
                <Menu.Item
                    as={ Link }
                    to='/'
                    onClick={() => this.setState({ active: 'home'})}
                >
                    <img src="https://ipfs.io/ipfs/QmVprAMVkhWoiMsTpTbY7amoM96w1syCXYXjFgyvwsJLoa" style={{width: 100, height: 100}}></img>
                </Menu.Item>

                <Menu.Item
                    as={ Link }
                    to='/user/token-list'
                    name='purchase'
                    active={active === 'purchase'}
                    onClick={() => this.setState({ active: 'purchase'})}
                >
                    <h2>Purchase Slots</h2>
                </Menu.Item>
    
                <Menu.Item
                    as={ Link }
                    to='/user/publisher'
                    name='list-form'
                    active={active === 'list-form'}
                    onClick={() => this.setState({ active: 'list-form'})}
                >
                    <h2>My Listings</h2>
                </Menu.Item>

                <Menu.Item
                    as={ Link }
                    to='/user/purchased-slots'
                    name='purchased-slots'
                    active={active === 'purchased-slots'}
                    onClick={() => this.setState({ active: 'purchased-slots'})}
                >
                    <h2>My Slots</h2>   
                </Menu.Item>

                <Menu.Item
                    as={ Link }
                    to='/'
                    name='login'
                    position='right'
                    onClick={() => this.setState({ active: 'home'})}
                >
                    <LoginButton /> 
                </Menu.Item>
            </Menu>
        );
    }
}

export default Header;