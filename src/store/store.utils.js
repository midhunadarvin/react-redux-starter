import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import createRootReducer from '../reducers';

export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
    const loggerMiddleware = createLogger();
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunkMiddleware,
                loggerMiddleware
            )
        )
    );

    return store;
}