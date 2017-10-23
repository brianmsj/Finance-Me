import * as actions from '../actions/index';

const initialState = {
  name:'',
  userId: '',
  userName: '',
  token: '',
  loggedIn: false,
  budgets: [],
  dummyBudgets: []

};

export default (state=initialState, action) => {
  switch(action.type) {
    case actions.SET_TOKEN_SUCCESS:
      return {...state,
                token: action.token,
                loggedIn: true
        };
    case actions.LOAD_DUMMY_BUDGETS:
      return {...state,
                dummyBudgets: [...action.dummyBudgets],
            };
    case actions.LOAD_BUDGET_SUCCESS:
      return {...state,
                budgets: [...action.budgets],
        };

   default:
   }

  return state;
};
