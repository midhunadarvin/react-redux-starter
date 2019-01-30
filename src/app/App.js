import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedRouter history={this.props.history}>
          <Switch>
            <Route path="/" render={() => <Dashboard />} />
          </Switch>
        </ConnectedRouter>
      </div>
    );
  }
}

App.propTypes = {
  'history': PropTypes.object
};

export default App;
