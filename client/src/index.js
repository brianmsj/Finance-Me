import React from 'react';
import ReactDOM from 'react-dom';
import BudgetLeftContainer from './components/budgetLeftContainer'
import App from './components/app';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers/index';
import Login from './components/login';
import * as Cookies from 'js-cookie';
import {createStore, applyMiddleware} from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import './main.css';
import './card.css';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

export const checkAuth = () => {
  const accessToken = Cookies.get('accessToken');
  if (!accessToken){
    browserHistory.replace('/login');
  }
}

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={BudgetLeftContainer} onEnter={checkAuth} />
      <Route path='/login' component={Login} />
    </Route>
  </Router>
);

ReactDOM.render(
    <Provider store={store}>
      {routes}
    </Provider>
    ,
  document.getElementById('root')
);
