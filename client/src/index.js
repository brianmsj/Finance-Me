import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import thunk from 'redux-thunk';
import {Route,BrowserRouter, Switch,} from 'react-router-dom';
import {Provider} from 'react-redux';
import reducer from './reducers/index';
import Login from './components/login';
import {createStore, applyMiddleware} from 'redux';
import './main.css';
import './card.css';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
       <div>
       <Switch>
        <Route path={'/home'} component={App} />
       </Switch>
        <Switch>
          <Route path={'/'} component={Login} />
        </Switch>
       </div>
     </BrowserRouter>
    </Provider>
    ,
  document.getElementById('root')
);
