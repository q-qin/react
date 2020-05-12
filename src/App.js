import React,{ Component } from 'react';
import {Router as HashRouter} from 'react-router-dom';
import Routes from './router/index'
const createHistory = require('history').createHashHistory
const history = createHistory();

class App extends Component  {
  render() {
    return (
      <HashRouter  history={history}>
        <Routes></Routes>
      </HashRouter>
    );
  }
}

export default App;
