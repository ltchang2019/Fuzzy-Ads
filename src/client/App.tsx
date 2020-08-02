import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Route } from 'react-router-dom';
import './assets/style/style.css';
import BuyAds from './components/BuyAds';
import Header from './components/Header'
import MySlots from './components/MySlots';
import SideBar from './components/SideBar';
import AdCreativeForm from './components/AdCreativeForm';
import PastAds from './components/PastAds';
import { useWeb3React } from "@web3-react/core";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = ({injectedConnector}: any) => {
  const { chainId, activate, account, active, library } = useWeb3React();

  useEffect(() => {
    activate(injectedConnector);
  }, []);

  return (
    <Container>
      <Helmet>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Montserrat+Alternates:wght@500;600&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://use.typekit.net/gzp4hjm.css"></link>
      </Helmet>

    {active && (
      <BrowserRouter >
        <Header />

        <div className="fuzzy-data dropshadow" style={{height: '70vh', minWidth: '50%'}}>
          <SideBar />
          <Route exact path='/advertiser/token-list' component={BuyAds} />
          <Route exact path='/advertiser/ad-creative-form' component={() => <AdCreativeForm />} />
          <Route exact path='/advertiser/past-ads' component={() => <PastAds />} />
        </div>
      </BrowserRouter>
    )}
    </Container>
  );
}

export default App;
