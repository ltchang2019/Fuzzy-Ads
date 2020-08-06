import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

function Landing() {
    return (
        <div>
            <div>
                <img src="https://ipfs.io/ipfs/QmVprAMVkhWoiMsTpTbY7amoM96w1syCXYXjFgyvwsJLoa" style={{width: 500, height: 500, marginBottom: '-50px'}}></img>
                <h2>A decentralized platform for direct and transparent advertising.</h2>
            </div>

            <div style={{marginTop: '15px'}}>
                    <Button color='orange' href='/advertiser'>
                        I'm an Advertiser
                    </Button>

                    <Button color='orange' href='/publisher'>
                        I'm a Publisher
                    </Button>
            </div>
        </div>  
    );
}

export default Landing;