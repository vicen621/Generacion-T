import React from "react";
import { Card, Image } from "semantic-ui-react";
import Status from "../status/Status"
import "./CharacterCard.css"

function CharacterCard(props) {
  const { data } = props;

  console.log(data)

  return data.map((char) => {
    return (
        <Card>
            <Image src={char.image}/>
            <Card.Content>
                <Card.Header>{char.name}</Card.Header>
                <Status alive={char.status}/>
            </Card.Content>
        </Card>
    )
  });
}

export default CharacterCard;
