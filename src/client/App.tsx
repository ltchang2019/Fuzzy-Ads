import React, { useEffect } from 'react';import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import TokenList from './components/TokenList';
import Header from './components/Header'
import PurchasedSlots from './components/PurchasedSlots';
import Home from './components/Home';
import AdCreativeForm from './components/AdCreativeForm';
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
      </Helmet>

    {active && (
      <BrowserRouter>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/user/token-list' component={TokenList} />
        <Route exact path='/user/ad-creative-form' component={() => <AdCreativeForm />} />
        <Route exact path='/user/my-slots' component={PurchasedSlots} />
      </BrowserRouter>
    )}
    
    </Container>

  );
}

export default App;
