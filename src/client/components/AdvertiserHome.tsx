import React, { useState } from 'react';
import { useWeb3React } from "@web3-react/core";
import { Link } from 'react-router-dom';

function AdvertiserHome() {
    const { account } = useWeb3React();

    return (
        <div className="flex-item">
            <h1>129,494</h1>
            <p>people saw your ads</p>
            <ul className="button-list">
                <li>
                    <Link className="button" to="/advertiser/token-list">
                        Buy an Ad
                    </Link>
                </li>

                <li>
                    <Link className="button" to="/advertiser/my-slots">
                        My Ads
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
// class AdvertiserHome extends Component {
//     state = {
//         auth: false
//     }
//     async componentDidMount() {
//         try {
//             await (window as any).ethereum.enable();
//             web3 = new Web3((window as any).ethereum);
//         } catch (error) {
//             window.alert('You need to allow MetaMask.');
//             return;
//         }
        
//         let userCookie = getSessionCookie()._id;
//         const user = await web3.eth.getCoinbase();
//         if(userCookie && user === userCookie) {
//             this.setState({ auth: true })
//         }
//     }

//     render() {
//         return (
//             <div className="flex-item">
//                 <h1>129,494</h1>
//                 <p>people saw your ads</p>
//                 <ul className="button-list">
//                     <li><a href="#" className="button">Buy An Ad</a></li>
//                     <li><a href="#" className="button">My Current Ads</a></li>
//                     <li><a href="#" className="button">Verify Impressions</a></li>
//                     <li><a href="#" className="button">How It Works</a></li>
//                 </ul>
//             </div>
//         );
//     }
// }

export default AdvertiserHome;