import React from 'react';
import { Link } from 'react-router-dom';

function AdvertiserSideBar({ type }: any | undefined) {
    if (type.includes('/advertiser')) {
        return (
            <div className="flex-item" style={{marginRight: '30px'}}>
                <ul className="button-list">
                    <li>
                        <Link className="button" to="/advertiser/buy-ads">
                            Buy an Ad
                        </Link>
                    </li>
    
                    <li>
                        <Link className="button" to="/advertiser/current-ads">
                            Current Ads
                        </Link>
                    </li>
    
                    <li>
                        <Link className="button" to="/advertiser/past-ads">
                            Past Ads
                        </Link>
                    </li>
    
                    <li>
                        <Link className="button" to="/advertiser/how-to">
                            How To Advertise
                        </Link>
                    </li>
                </ul>
            </div>
        )
    } else if(type.includes('/publisher')) {
        return (
            <div className="flex-item" style={{marginRight: '30px'}}>
                <ul className="button-list">
                    <li>
                        <Link className="button" to="/publisher/payment-history">
                            Payment History
                        </Link>
                    </li>

                    <li>
                        <a className="button" href="https://github.com/fuzzyads/fuzzy-ads-sdk" target="_blank">
                            Embeddable SDK
                        </a>
                    </li>
    
                    <li>
                        <Link className="button" to="/publisher/how-to">
                            How To Publish
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