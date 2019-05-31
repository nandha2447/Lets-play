import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './containers/Login';
import Registration from './containers/Registration';
import Interests from './containers/Interests';
import Home from './containers/Home';

class App extends React.Component {
  render(){
    return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Login} />
        <Route exact={true} path="/register" component={Registration} />
        <Route exact={true} path="/interests" component={Interests} />
        <Route exact={true} path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
    )
  }
}

export default App;
