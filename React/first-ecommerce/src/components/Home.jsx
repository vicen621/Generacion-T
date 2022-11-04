import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Axios from "axios";
import { Carousel, Ratio, Spinner } from "react-bootstrap";
import {shuffle} from '../utils/ArrayUtils'

function Home() {
  const [data, setData] = useState();
  const [index, setIndex] = useState(0);  

  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products/").then((response) =>
      setData(shuffle(response.data).slice(0,4))
    );
  }, []);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Navigation />
      {data ? (
        <>
          <Carousel bg="dark" variant="dark" activeIndex={index} onSelect={handleSelect}>
            {data.map((item, id) => {
              return(
              <Carousel.Item key="id">
                <Ratio aspectRatio={9/16}>
                <img
                  className="d-block w-100"
                  src={item.image}
                  alt={id + " item"}
                />
                </Ratio>
                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </Carousel.Caption>
              </Carousel.Item>);
            })}
          </Carousel>
        </>
      ) : (
        <div className="text-center">
          <Spinner aria-label="Loading..." size="xl" />
        </div>
      )}
    </>
  );
}

export default Home;
