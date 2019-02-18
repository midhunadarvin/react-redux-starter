import React, { Component } from 'react';
import './App.css';
import Login from './login/Login';
import Dashboard from './dashboard/Dashboard';
import { Route, Switch } from 'react-router';
import { withRouter } from 'react-router-dom';
export class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" render={() => <Dashboard />} />
        <Route path="/login" render={() => <Login />} />
      </Switch>
    );
  }
}

export default withRouter(App);
