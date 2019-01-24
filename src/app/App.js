import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Home from './home/Home';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
class App extends Component {
  render() {
    return (
      <div className="App">
        <ConnectedRouter history={this.props.history}>
          <Switch>
            <Route exact path="/home" render={() => <Home />} />
            <Redirect from="/" to="home" />
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
