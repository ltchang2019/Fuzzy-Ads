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
                        <img className="fuzzy-thumb" src="https://i.ibb.co/WzyZQLF/lego-ad-200x200.jpg" alt="lego-ad-200x200"></img>
                        <ul>
                            <li>Lego Cyclops Family</li>
                            <li>July 12, 2020</li>
                            <li>483348 Impressions</li>
                            <li>344 (usd)</li>
                        </ul>
                    </a>			
                </div>

                <div className="ads">
                    <a href="#" className="ad">
                        <img className="fuzzy-thumb" src="https://i.ibb.co/WzyZQLF/lego-ad-200x200.jpg" alt="lego-ad-200x200"></img>
                        <ul>
                            <li>Lego Cyclops Family</li>
                            <li>July 12, 2020</li>
                            <li>483348 Impressions</li>
                            <li>344 (usd)</li>
                        </ul>
                    </a>			
                </div>

                <div className="ads">
                    <a href="#" className="ad">
                        <img className="fuzzy-thumb" src="https://i.ibb.co/WzyZQLF/lego-ad-200x200.jpg" alt="lego-ad-200x200"></img>
                        <ul>
                            <li>Lego Cyclops Family</li>
                            <li>July 12, 2020</li>
                            <li>483348 Impressions</li>
                            <li>344 (usd)</li>
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