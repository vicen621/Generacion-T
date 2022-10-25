import React from "react";
import { Icon } from "semantic-ui-react";
import "./Status.css"

function Status(props) {
  const { alive } = props;

  const statusVars = {
    alive: "green",
    dead: "red",
    unknown: "grey",
  };

  const status = statusVars[alive.toLowerCase()];

  return (
    <div>
      <Icon color={status} name="circle"/> <span className="capitalize">{alive}</span>
    </div>
  );
}

export default Status;
