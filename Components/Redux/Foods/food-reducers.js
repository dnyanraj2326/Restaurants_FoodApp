import * as actionType from './food-types';
import MenuItemsData from '../../MenuItemsData';

const INITIAL_STATE = {
  products: [...MenuItemsData],
  cart: [],
};

const foodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      const item = state.products.find(prod => prod.id === action.payload.id);

      const inCart = state.cart.find(item =>
        item.id === action.payload.id ? true : false,
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map(item =>
              item.id === action.payload.id
                ? {...item, qty: item.qty + 1}
                : item,
            )
          : [...state.cart, {...item, qty: 1}],
      };
    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
    case actionType.INCREASE_QTY:
      let tempCartInc = state.cart.map(cartItem => {
        if (cartItem.id === action.payload.id) {
          return {...cartItem, qty: cartItem.qty + 1};
        }
        return cartItem;
      });
      return {
        ...state,
        cart: tempCartInc,
        // cart: state.cart.find(pro => pro.id === action.payload.id +1)
      };
    case actionType.DECRESS_QTY:
      tempCartDec = state.cart
        .map(cartItem => {
          if (cartItem.id === action.payload.id) {
            return {...cartItem, qty: cartItem.qty - 1};
          }
          return cartItem;
        })
        .filter(cartItem => cartItem.qty !== 0);
      return {
        ...state,
        cart: tempCartDec,
      };
    default:
      return state;
  }
};

export default foodReducer;
