import React, { useState } from 'react';
import { useWeb3React } from "@web3-react/core";
import { Link } from 'react-router-dom';

function PastAds() {
    const { account } = useWeb3React();

    return (
        <div className="flex-item" style={{minWidth: '30vw'}}>
		    <div className="fuzzy-terminal dark past-ads">
			<h2>Past Ads</h2>
                
                <div className="ads">
                    <a href="#" className="ad">
                        <img className="fuzzy-thumb" src="https://1000logos.net/wp-content/uploads/2016/11/Coca-Cola-Logo.png" alt="lego-ad-200x200"></img>
                        <ul>
                            <li>Coca Cola</li>
                            <li>July 12, 2020</li>
                            <li>4833948 Impressions</li>
                            <li>$3203 (usd)</li>
                        </ul>
                    </a>			
                </div>

                <div className="ads">
                    <a href="#" className="ad">
                        <img className="fuzzy-thumb" src="https://marketingweek.imgix.net/content/uploads/2014/10/Coca_Cola.jpg?auto=compress,format&q=60&w=736&h=451" alt="lego-ad-200x200"></img>
                        <ul>
                            <li>Coca Cola</li>
                            <li>July 11, 2020</li>
                            <li>6734800 Impressions</li>
                            <li>$5857 (usd)</li>
                        </ul>
                    </a>			
                </div>

                <div className="ads">
                    <a href="#" className="ad">
                        <img className="fuzzy-thumb" src="https://www.logotaglines.com/wp-content/uploads/2019/08/CocaCola-LogoTagline-Slogan.jpg" alt="lego-ad-200x200"></img>
                        <ul>
                            <li>Coca Cola</li>
                            <li>July 11, 2020</li>
                            <li>574246 Impressions</li>
                            <li>$5121 (usd)</li>
                        </ul>
                    </a>			
                </div>

                <p className="ctas" style={{marginTop: '10px'}}>
                    <a href="#" className="button small">
                        Export CSV
                    </a>
                </p>
            </div>
	    </div>
    );
}

export default PastAds;