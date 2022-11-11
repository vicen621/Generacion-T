import React from "react";
import { Col, Row } from "react-bootstrap";
import { useShopping, useShoppingDispatch } from "../components/context/ShoppingContext";
import Navigation from "../components/Navigation";
import Product from "../components/Product";

function ShoppingCart() {
  const cart = useShopping()
  const context = useShoppingDispatch();
  console.log(cart)

  return (
    <>
      <Navigation />
      <div>ShoppingCart</div>
      <div>
        <h1>Products</h1>
        <article className="box">
          <h3>Carrito</h3>
        </article>
        <article className="box">
        <Row xs={1} sm={2} md={3} lg={4}>
        {cart.map((product) => {
          return (
            <Col>
              <Product data={product} />
            </Col>
          );
        })}
      </Row>
        </article>
      </div>
    </>
  );
}

export default ShoppingCart;
