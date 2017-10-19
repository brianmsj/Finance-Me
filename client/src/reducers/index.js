import * as actions from '../actions/index';

const initialState = {
  name:'',
  userId: '',
  userName: '',
  token: '',
  category: ['Savings','Groceries','Transportation','Giving']
};

export default (state=initialState, action) => {
  switch(action.type) {
    case actions.FETCH_STOCKS_SUCCESS:
      return {...state,
               stocks: action.stocks
      };
    case actions.FETCH_CATEGORIES_SUCCESS:
      return {...state,
                category: [...state.category,action.category]
      };
    case actions.FETCH_CATEGORIES_SUCCESS:
      return {...state,
                token: action.token
        };

   }
  return state;
};




// Claim ID:	DI-1003-724-447
