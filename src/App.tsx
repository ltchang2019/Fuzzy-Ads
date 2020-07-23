import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Redirect, Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Publisher from './components/Publisher';
import TokenList from './components/TokenList';

const App = () => {
  return (
    <Container>
      <Helmet>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      </Helmet>

      <BrowserRouter>
        <Route path='/login' component={Login} />
        <Route path='/publisher' component={Publisher} />
        <Route path='/token-list' component={TokenList} />
      </BrowserRouter>
      </Container>
  );
}

export default App;
