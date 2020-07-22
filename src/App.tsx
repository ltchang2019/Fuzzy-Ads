import React from 'react';
import { BrowserRouter, Redirect, Router, Switch, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Publisher from './components/Publisher';

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Route path='/login' component={Login} />
            <Route path='/publisher' component={Publisher} />
        </BrowserRouter>
    </div>
  );
}

export default App;
