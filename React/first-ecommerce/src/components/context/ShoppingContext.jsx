import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
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
  const [products, setProducts] = useState([]);
  const [cart, dispatch] = useReducer(shoppingReducer, initialCart);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/").then((response) => {
      setProducts(response.data);
    });
  }, []);
  

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
        <ProductContext.Provider value={products}>
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
