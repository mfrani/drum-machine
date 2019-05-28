import React from "react";
import { DisplayWrapper } from "../styles/styles";
const Display = props => {
  return (
    <DisplayWrapper>
      <h3>Key pressed</h3>
      <p>{props.drumkey}</p>
      <h3>Beat name</h3> <p>{props.name}</p>
    </DisplayWrapper>
  );
};

export default Display;
