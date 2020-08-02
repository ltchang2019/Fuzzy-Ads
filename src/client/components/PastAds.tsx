import React, { useState } from 'react';
import { useWeb3React } from "@web3-react/core";
import { Link } from 'react-router-dom';

function PastAds() {
    const { account } = useWeb3React();

    return (
        <div className="flex-item" style={{minWidth: '40vw'}}>
            <div className="terminal dark verify-impressions">
                <h2>Past Ads</h2>
                <table className="data-table" style={{margin: '0 auto'}}>
                    <tr>
                        <td>July 12, 2020</td>
                        <td><a href="#">483348 Impressions</a></td>
                        <td>$344 (usd)</td>
                    </tr>
                    <tr>
                        <td>July 7, 2020</td>
                        <td><a href="#">4848 Impressions</a></td>
                        <td>$344 (usd)</td>
                    </tr>
                    <tr>
                        <td>July 7, 2020</td>
                        <td><a href="#">4848 Impressions</a></td>
                        <td>$344 (usd)</td>
                    </tr>
                    <tr>
                        <td>July 7, 2020</td>
                        <td><a href="#">4848 Impressions</a></td>
                        <td>$344 (usd)</td>
                    </tr>
                    <tr>
                        <td>July 7, 2020</td>
                        <td><a href="#">4848 Impressions</a></td>
                        <td>$344 (usd)</td>
                    </tr>
                    <tr>
                        <td>July 7, 2020</td>
                        <td><a href="#">4848 Impressions</a></td>
                        <td>$344 (usd)</td>
                    </tr>
                    <tr>
                        <td>July 7, 2020</td>
                        <td><a href="#">4848 Impressions</a></td>
                        <td>$344 (usd)</td>
                    </tr>
                    <tr>
                        <td>July 7, 2020</td>
                        <td><a href="#">4848 Impressions</a></td>
                        <td>$344 (usd)</td>
                    </tr>
                    <tr>
                        <td>July 7, 2020</td>
                        <td><a href="#">4848 Impressions</a></td>
                        <td>$344 (usd)</td>
                    </tr>
                    <tr>
                        <td>July 7, 2020</td>
                        <td><a href="#">4848 Impressions</a></td>
                        <td>$344 (usd)</td>
                    </tr>
                    <tr>
                        <td>July 7, 2020</td>
                        <td><a href="#">4848 Impressions</a></td>
                        <td>$344 (usd)</td>
                    </tr>
                    <tr>
                        <td>July 7, 2020</td>
                        <td><a href="#">4848 Impressions</a></td>
                        <td>$344 (usd)</td>
                    </tr>
                    <tr>
                        <td>July 7, 2020</td>
                        <td><a href="#">4848 Impressions</a></td>
                        <td>$344 (usd)</td>
                    </tr>
                </table>

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