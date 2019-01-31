import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { history } from './store/store.utils';
import store from './store/index';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.min';

import 'font-awesome/css/font-awesome.min.css';
import './index.css';

import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
          <Switch>
            <Route path="/" render={() => <App />} />
          </Switch>
        </ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
