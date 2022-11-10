import React from 'react'
import { useEffect } from 'react';
import { useReducer } from 'react';
import { initialCart, shoppingReducer } from '../components/reducers/ShoppingReducer'

function ShoppingCart() {
    const [state, dispatch] = useReducer(shoppingReducer, initialCart)

    useEffect(() => {
      console.log(initialCart)
    }, [])


  return (
    <>
    <div>ShoppingCart</div>
    <div>
        <h1>Products</h1>
        <article className="box"><h3>Carrito</h3></article>
        <article className="box">

        </article>
    </div>
    </>
  )
}

export default ShoppingCart