import React from 'react';
import { Link } from 'react-router-dom';

function AdvertiserSideBar() {
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
    );
}

export default AdvertiserSideBar;