import React from 'react'
import { Card } from 'react-bootstrap';

function Product({data}) {
  const context = useShoppingDispatch();

  return (
    <Card>
        <Card.Img src={data.image}/>
        <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>{data.description}</Card.Text>
            <Button variant="primary" onClick={dispatch.addProductToCart}>Add to cart</Button>
        </Card.Body>
    </Card>
  )
}

export default Product