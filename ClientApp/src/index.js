import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import * as Redux from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers/RootReducer';
import thunk from 'redux-thunk';

const logger = (store) => (next) => (action) => {
	console.log('ACTION:', action.type, action);
	let result = next(action);
	console.log('STATE AFTER ACTION:', action.type, store.getState());
	return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
export const theStore = Redux.createStore(rootReducer, composeEnhancers(Redux.applyMiddleware(logger, thunk)));

const mainComponent = (
	<Provider store={theStore}>
		<App />
	</Provider>
);

ReactDOM.render(mainComponent, document.getElementById('root') || document.createElement('div'));


