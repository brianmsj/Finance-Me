import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import thunk from 'redux-thunk';
import { Route, IndexRoute, BrowserRouter, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import reducer from './reducers/index';
import {createStore, applyMiddleware} from 'redux';
import './main.css';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
     <div>
      <Switch>
       <Route path='/' component={App} />
      </Switch>
     </div>
     </BrowserRouter>
     </Provider>
    ,
  document.getElementById('root')
);
