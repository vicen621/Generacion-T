import { TYPES } from "../actions/ShoppingActions";

export const initialCart = []

export function shoppingReducer(cart, action) {
  switch (action.type) {
    case TYPES.ADD_TO_CART: {
      console.log("ADD TO CART")
      return [...cart, action.product]
    }

    case TYPES.REMOVE_ONE_FROM_CART: {
      console.log("REMOVE ONE FROM CART")
      return cart.filter(p => p.id !== action.id)
    }

    case TYPES.CLEAR_CART: {
      console.log("CLEAR CART")
      return cart.splice(0, splice.length)
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
