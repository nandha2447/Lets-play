import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from './containers/Login';
import Registration from './containers/Registration';
import Interests from './containers/Interests';

class App extends React.Component {
  render(){
    return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={Login} />
        <Route exact={true} path="/register" component={Registration} />
        <Route exact={true} path="/interests" component={Interests} />
      </Switch>
    </BrowserRouter>
    )
  }
}

export default App;
