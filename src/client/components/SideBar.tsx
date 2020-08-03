import React from 'react';
import { Link } from 'react-router-dom';

function AdvertiserSideBar({ type }: any | undefined) {
    if (type.includes('/advertiser')) {
        return (
            <div className="flex-item">
                <h1>129,494</h1>
                <br />
                <p>people saw your ads</p>
                <ul className="button-list">
                    <li>
                        <Link className="button" to="/advertiser/token-list">
                            Buy an Ad
                        </Link>
                    </li>
    
                    <li>
                        <Link className="button" to="/advertiser/current-ad">
                            Current Ad
                        </Link>
                    </li>
    
                    <li>
                        <Link className="button" to="/advertiser/past-ads">
                            Past Ads
                        </Link>
                    </li>
    
                    <li>
                        <Link className="button" to="/advertiser/how-it-works">
                            How It Works
                        </Link>
                    </li>
                </ul>
            </div>
        )
    } else if(type.includes('/publisher')) {
        return (
            <div className="flex-item">
                <h1>129,494</h1>
                <br />
                <p>Total Earnings (USD)</p>
                <ul className="button-list">
                    <li>
                        <Link className="button" to="/publisher/payment-history">
                            Payment History
                        </Link>
                    </li>
    
                    <li>
                        <Link className="button" to="/publisher/how-to">
                            How It Works
                        </Link>
                    </li>
                </ul>
            </div>
        )
    } else {
        return <div></div>;
    }
}

export default AdvertiserSideBar;