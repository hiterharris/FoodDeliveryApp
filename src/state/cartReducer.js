import { combineReducers } from 'redux';

const INITIAL_STATE = {
    cart: [
        {
            id: 1,
            name: "Crispy Chicken Burger",
            photo: '',
            description: "Burger with crispy chicken, cheese and lettuce",
            calories: 200,
            price: 10
        },
    ]
  };

  const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return [...state, action.payload];
      default:
        return state
    }
  };
  
  export default combineReducers({
    cartReducer
  });