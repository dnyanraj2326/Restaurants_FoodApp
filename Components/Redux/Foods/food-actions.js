import * as actionTypes from './food-types';

export const addToCart = (itemId) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id:itemId
        }
    }
}

export const removeFromCart = (itemId) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id:itemId
        }
    }
}

export const increaseQty = (itemId) => {
    return {
        type: actionTypes.INCREASE_QTY,
        payload: {
            id:itemId
        }
    }
}

export const decressQty = (itemId) => {
    return {
        type: actionTypes.DECRESS_QTY,
        payload: {
            id:itemId
        }
    }
}