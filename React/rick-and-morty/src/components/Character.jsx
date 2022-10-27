import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CharacterCard from "./CharacterCard";

function Character({ data }) {
  return (
    <div className="mt-4">
      {data.length === 1 ? (
        <CharacterCard char={data[0]} />
      ) : (
        <Row xs={1} md={2} lg={3} xl={4} className="g-3">
          {data.map((char, i) => (
            <Col>
              <CharacterCard char={char} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default Character;
