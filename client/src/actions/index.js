import * as Cookies from 'js-cookie';
import { browserHistory } from 'react-router';

export const FETCH_STOCKS_SUCCESS = 'FETCH_STOCKS_SUCCESS';
export const fetchStocksSuccess = (stocks) => ({
  type: FETCH_STOCKS_SUCCESS,
  stocks: stocks
});
export const FETCH_STOCKS_FAILURE = 'FETCH_STOCKS_FAILURE';
export const fetchStocksFailure = (error) => ({
  type: FETCH_STOCKS_FAILURE,
  error
});


//---------------- ASYNC ACTIONS - REGISTRATION / LOGIN -------------------- //
export const login = (username,password) => dispatch => {
   return fetch(`/api/auth/login`,
     {
       headers: {
         'Authorization': 'Basic ' + btoa(username + ':' + password),
         'Content-Type': 'application/json'
       },
       method: 'POST'
     })
     .then((response) => response.json())
     .then(json => {
       sessionStorage.setItem('jwtToken',json.authToken)
       console.log(json);
     });
}

export const newUser = (data) => dispatch => {
    return fetch(`/api/users`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then(json => console.log(json));
}

export const stockPrices = () => dispatch => {
    return fetch(`/api/stockquotes`)
    .then((response) => response.json())
    .then(json => {dispatch(fetchStocksSuccess(json))})
    .catch(error=>{dispatch(fetchStocksFailure())});
}
