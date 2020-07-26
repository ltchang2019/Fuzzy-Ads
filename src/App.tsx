import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Publisher from './components/Publisher';
import TokenList from './components/TokenList';
import EditAdForm from './components/EditAdForm';
import NewSlot from './components/NewSlot';
import Header from './components/Header'

const App = () => {
  return (
    <Container>
      <Helmet>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      </Helmet>

      <BrowserRouter>
        <Header />
        <Route path='/login' component={Login} />
        <Route path='/user/publisher' component={Publisher} />
        <Route path='/user/token-list' component={TokenList} />
        <Route path='/user/edit-ad' component={EditAdForm} />
        <Route path='/user/new-slot' component={NewSlot} />
      </BrowserRouter>
      </Container>
  );
}

export default App;
