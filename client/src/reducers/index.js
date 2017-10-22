import * as actions from '../actions/index';

const initialState = {
  name:'',
  userId: '',
  userName: '',
  token: '',
  loggedIn: false,
  budgets: []

};

export default (state=initialState, action) => {
  switch(action.type) {
    case actions.SET_TOKEN_SUCCESS:
      return {...state,
                token: action.token,
                loggedIn: true
        };

   default:
   }

  return state;
};
