import "./Characters.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "../../components/card/CharacterCard";
import { Icon } from "semantic-ui-react";

function Characters() {
  const [characters, setData] = useState();

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character").then((data) =>
      setData(data.data.results)
    );
  }, []);

  return characters ? (
    <div className="grid-container">
      <CharacterCard className="CharacterCard" data={characters} />
    </div>
  ) : (
    <div className="grid-container">
      <Icon className="Icon" loading name="circle notch" />
    </div>
  );
}

export default Characters;
