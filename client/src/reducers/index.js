import * as actions from '../actions/index';

const initialState = {
  firstname:'',
  email: '',
  lastname: '',
  username: '',
  token: '',
  loggedIn: false,
  budgets: [],

};

export default (state=initialState, action) => {
  switch(action.type) {
    case actions.SET_TOKEN_SUCCESS:
      return {...state,
                token: action.token,
                loggedIn: true
        };
    case actions.LOAD_BUDGET_SUCCESS:
      return {...state,
                budgets: action.budgets,
                email: action.email,
                firstname: action.firstname,
                lastname: action.lastname,
                username: action.username

        };

   default:
   }

  return state;
};
