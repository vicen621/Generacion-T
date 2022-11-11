import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { useShoppingDispatch } from './context/ShoppingContext';

//TODO: Ver porque tira el error Uncaught TypeError: context.addProductToCart is not a function

function Product({data}) {
  const context = useShoppingDispatch();
  console.log(context)

  return (
    <Card>
        <Card.Img src={data.image}/>
        <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
            <Button variant="primary" onClick={() => context.addProductToCart(data)}>Add to cart</Button>
        </Card.Body>
    </Card>
  )
}

export default Product