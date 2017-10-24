import * as Cookies from 'js-cookie';
import fetch from 'isomorphic-fetch'
import 'babel-polyfill'

export const FETCH_USER_INFO_SUCCESS = 'FETCH_USER_INFO_SUCESS';
export const fetchUserInfoSuccess = (name,userId,userName) => ({
  type: FETCH_USER_INFO_SUCCESS,
  name,
  userId,
  userName
})
export const SET_TOKEN_SUCCESS = 'SET_TOKEN_SUCCESS';
export const setTokenSuccess = (token) => ({
  type: SET_TOKEN_SUCCESS,
  token
});
export const SET_TOKEN_FAILURE = 'SET_TOKEN_FAILURE';
export const setTokenFailure = (error) => ({
  type: SET_TOKEN_FAILURE,
  error
});
export const LOAD_BUDGET_SUCCESS = 'LOAD_BUDGET_SUCCESS';
export const loadBudgetSuccess = (budgets,email,firstname,lastname,username) => ({
  type: LOAD_BUDGET_SUCCESS,
  budgets,
  email,
  firstname,
  lastname,
  username,
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
     .then(json => dispatch(setTokenSuccess(json.authToken)))
     .then(json => sessionStorage.setItem('accessToken',json.token))
     .catch(error => dispatch(setTokenFailure(error)))
   };



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

const newBudgets = () => dispatch => {
   let accessToken = sessionStorage.getItem('accessToken');
   return fetch(`api/budget/newbudgets`, {
     headers: {'Authorization': `bearer ${accessToken}`
   },
   method: 'POST'
 })
 .then((response) => response.json())
 .then((json) => console.log(json))
}

const populateBudgets = () => dispatch => {
   let accessToken = sessionStorage.getItem('accessToken');
   return fetch(`api/budget/mynewbudgets`, {
     headers: {'Authorization': `bearer ${accessToken}`
   }
 })
 .then((response) => response.json())
 .then((json) => console.log(json))
}

const getBudgets = () => dispatch => {
   let accessToken = sessionStorage.getItem('accessToken');
   return fetch(`api/budget/mybudgets`, {
     headers: {'Authorization': `bearer ${accessToken}`
   }
 })
 .then((response) => response.json())
 .then(json => dispatch(loadBudgetSuccess(json[0].months,json[0].email,json[0].firstName,json[0].lastName,json[0].username)));
}
export const loadUser = () => dispatch => {
   let accessToken = sessionStorage.getItem('accessToken');
   return fetch(`api/budget/mybudgets`, {
     headers: {'Authorization': `bearer ${accessToken}`
   }
 })
 .then((response) => response.json())
 .then(json => dispatch(loadBudgetSuccess(json[0].months,json[0].email,json[0].firstName,json[0].lastName,json[0].username)));
}

export const budgetCreator = () => dispatch => {
  Promise.all([
    dispatch(newBudgets()),
    dispatch(populateBudgets()),
  ])
  setTimeout(() => {dispatch(getBudgets())},5000)
  }
