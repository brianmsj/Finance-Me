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
export const NEW_BUDGET_SUCCESS = 'NEW_BUDGET_SUCCESS';
export const newBudgetSuccess = (month, categories) => ({
  type: NEW_BUDGET_SUCCESS,
  month
})
export const CURRENT_BUDGET_SUCCESS = 'CURRENT_BUDGET_SUCCESS';
export const currentBudgetSuccess = (month,categories) => ({
  type: CURRENT_BUDGET_SUCCESS,
  month,
  categories
});

export const NEW_BUDGET_FAILURE = 'NEW_BUDGET_FAILURE';
export const newBudgetFailure = (error) => ({
  type: NEW_BUDGET_FAILURE,
  error
});
export const NEW_USER_FAILURE = 'NEW_USER_FAILURE';
export const newUserFailure = (error) => ({
  type: NEW_USER_FAILURE,
  error
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
    .catch((error) => dispatch(newUserFailure()))
}

export const newBudget = () => dispatch => {
   let accessToken = sessionStorage.getItem('accessToken');
   return fetch(`api/budget/newbudget`, {
     headers: {'Authorization': `bearer ${accessToken}`
   },
   method: 'POST'
 })
 .then((response) => response.json())
 .then(data => dispatch(currentBudgetSuccess(data.month,data.categories)))
 .catch(error => dispatch(newBudgetFailure()));
}

export const currentMonth = () => dispatch => {
  let monthList = ["January","February","March","April","May","June","July","August",
  "September","October","November","December"]
  let d = new Date()
  d = monthList[d.getMonth()]
  let accessToken = sessionStorage.getItem('accessToken');
  return fetch(`api/budget/currentbudget/${d}`, {
     headers: {'Authorization': `bearer ${accessToken}`}
     }
  )
  .then((response) => {
    if(response.ok) {
      return response.json()
    }
    throw new Error('Need to create current Month')
  })
  .then((json) => dispatch(currentBudgetSuccess(json[0].month,json[0].categories)))
  .catch(error => console.log(error))
}
export const newCategory = (category) => dispatch => {
  let monthList = ["January","February","March","April","May","June","July","August",
  "September","October","November","December"]
  let d = new Date()
  d = monthList[d.getMonth()]
  let accessToken = sessionStorage.getItem('accessToken');
  return fetch(`api/budget/newcategory/${d}`, {
     headers: {'Authorization': `bearer ${accessToken}`,
               'Content-Type': 'application/json'
   },
     method: 'PUT',
     body: JSON.stringify(category)
  })
  .then(response => response.json())
  .then(data => console.log(data))

}
//CURRENT ACTION

const populateBudgets = () => dispatch => {
   let accessToken = sessionStorage.getItem('accessToken');
   return fetch(`api/budget/mynewbudgets`, {
     headers: {'Authorization': `bearer ${accessToken}`
   }
 })
 .then((response) => response.json())
}

const getBudgets = () => dispatch => {
   let accessToken = sessionStorage.getItem('accessToken');
   return fetch(`api/budget/mybudgets`, {
     headers: {'Authorization': `bearer ${accessToken}`
   }
 })
 .then((response) => response.json())
 .then(json => dispatch(loadBudgetSuccess(json[0].months,json[0].email,json[0].firstName,json[0].lastName,json[0].username)))
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
