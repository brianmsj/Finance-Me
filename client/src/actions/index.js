

export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const fetchCategoriesSuccess = (category) => ({
  type: FETCH_CATEGORIES_SUCCESS,
  category: category
});
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';
export const fetchCategoriesFailure = (error) => ({
  type: FETCH_CATEGORIES_FAILURE,
  error
});

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
export const addCategory= (category) => dispatch => {
   return fetch(`/api/budget`,
     {
       headers: {
         'Content-Type': 'application/json'
       },
       method: 'POST',
       body: JSON.stringify(category)
     })
     .then((response) => response.json())
     .then(json => dispatch(fetchCategoriesSuccess(json.category)))
     .catch(error => dispatch(fetchCategoriesFailure(error)))
}
