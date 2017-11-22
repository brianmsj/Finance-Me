import * as actions from '../actions/index';

const initialState = {
  firstname:'',
  email: '',
  lastname: '',
  username: '',
  token: '',
  loggedIn: false,
  currentMonth: false,
  month: '',
  categories: []

};

export default (state=initialState, action) => {
  switch(action.type) {
    case actions.SET_TOKEN_SUCCESS:
      return {...state,
                token: action.token,
                loggedIn: true
        };
    case actions.CURRENT_BUDGET_SUCCESS:
      return {...state,
                currentMonth: true,
                month: action.month,
                categories: action.categories,
        };
    case actions.NEW_BUDGET_SUCCESS:
      return {...state,
                currentMonth: true,
                month: action.month,
                categories: action.categories
      };

   default:
   }

  return state;
};
