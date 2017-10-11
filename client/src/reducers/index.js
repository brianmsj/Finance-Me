import * as actions from '../actions/index';

const initialState = {
  stocks: []
};

export default (state=initialState, action) => {
  switch(action.type) {
    case actions.FETCH_STOCKS_SUCCESS:
      return {...state,
               stocks: action.stocks
      };
   }
  return state;
};
