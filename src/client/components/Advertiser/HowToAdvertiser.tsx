import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/style/style.css';

function HowToAdvertiser() {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>How To Advertise With Us</h2>
            <ol style={{textAlign: 'left', fontSize: '18px', marginTop: '20px'}}>
                <li className="how-to">
                    Buy a one-day slot from OpenSea.
                    
                    <Link to="/advertiser/buy-ads">
                        <a> (here)</a>
                    </Link>
                </li>
                <li className="how-to">
                    Upload your ad creative info (title, description, image url, redirect url). 
                    
                    <Link to="/advertiser/current-ads">
                        <a> (here)</a>
                    </Link>
                </li>
                <li className="how-to">Watch your views and conversions go up! 🚀</li>
            </ol>
        </div>
    );
}

export default HowToAdvertiser;