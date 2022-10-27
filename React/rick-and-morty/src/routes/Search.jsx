import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Character from "../components/Character";

function Search() {
  const [char, setChar] = useState();
  let { id, name } = useParams();

  useEffect(() => {
    console.log(id ? "true" : "False");
    axios
      .get(
        `https://rickandmortyapi.com/api/character/${
          id ? id : `?name=${name.toLowerCase().replace(" ", "+")}`
        }`
      )
      .then((data) => setChar(data.data))
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      });
  }, [id, name]);

  return <Character data={char} />;
}

export default Search;
