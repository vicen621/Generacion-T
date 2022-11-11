import React, { createContext, useContext, useReducer } from "react";
import { data } from "../../assets/data";
import { TYPES } from "../actions/ShoppingActions";
import { initialCart, shoppingReducer } from "../reducers/ShoppingReducer";

const ShoppingContext = createContext(null);
const ProductContext = createContext([]);
const ShoppingDispatchContext = createContext({
    addProductToCart: product => {},
    removeProductFromCart: id => {},
    clearCart: () => {}
});

export function GlobalContext({ children }) {
  const [cart, dispatch] = useReducer(shoppingReducer, initialCart);

  function addProductToCart(product) {
    dispatch({ type: TYPES.ADD_TO_CART, product: product})
  }

  function removeProductFromCart(id) {
    dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, id: id})
  }

  function clearCart() {
    dispatch({ type: TYPES.CLEAR_CART })
  }

  return (
    <ShoppingContext.Provider value={cart}>
      <ShoppingDispatchContext.Provider value={{
        addProductToCart: {addProductToCart},
        removeProductFromCart: {removeProductFromCart},
        clearCart: {clearCart}
      }}>
        <ProductContext.Provider value={data}>
          {children}
        </ProductContext.Provider>
      </ShoppingDispatchContext.Provider>
    </ShoppingContext.Provider>
  );
}

export function useShopping() {
  return useContext(ShoppingContext);
}

export function useProducts() {
    return useContext(ProductContext);
  }

export function useShoppingDispatch() {
  return useContext(ShoppingDispatchContext);
}
