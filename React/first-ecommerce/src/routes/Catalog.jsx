import React from "react";
import { Col, Row } from "react-bootstrap";
import { useProducts } from "../components/context/ShoppingContext";
import Navigation from "../components/Navigation";
import Product from "../components/Product";

function Catalog() {
  const products = useProducts();
  console.log(products);

  return (
    <>
      <Navigation />
      <Row xs={1} sm={2} md={3} lg={4}>
        {products.map((product) => {
          return (
            <Col>
              <Product data={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Catalog;
