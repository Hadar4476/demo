import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { BrowserRouter } from 'react-router-dom';

import 'popper.js/dist/popper';
import 'jquery/dist/jquery';

import './index.css';
import 'animate.css/animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'boxicons';

import App from './App';

import countriesReducer from './store/reducers/countries';
import playersReducer from './store/reducers/players';

import {
  watchGetCountries,
  watchGetCountryDetails,
  watchGetPlayersPerCountry,
  watchSearchForCountrySaga,
} from './store/sagas';

import reportWebVitals from './reportWebVitals';

const rootReducer = combineReducers({
  countries: countriesReducer,
  players: playersReducer,
});

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleWare))
);

sagaMiddleWare.run(watchGetCountries);
sagaMiddleWare.run(watchGetCountryDetails);
sagaMiddleWare.run(watchSearchForCountrySaga);
sagaMiddleWare.run(watchGetPlayersPerCountry);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
