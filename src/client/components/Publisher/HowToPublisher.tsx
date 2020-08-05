import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/style/style.css';
import HowToAdvertiser from '../Advertiser/HowToAdvertiser';

function HowToPublisher() {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>How To Publish With Us</h2>
            <ol style={{textAlign: 'left', fontSize: '18px', marginTop: '20px'}}>
                <li className="how-to">
                    Embed our SDK somewhere in your website. That's it!
                    
                    <a href="https://github.com/fuzzyads/fuzzy-ads-sdk" target="_blank"> (here)</a>
                </li>
            </ol>
        </div>
    );
}

export default HowToPublisher;