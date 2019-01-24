// reducers.js
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { sidebarReducer } from './sidebar.reducer';

export default (history) => combineReducers({
	'router': connectRouter(history),
	sidebarReducer
});
