import React from "react";
import {Title} from "./styled"

function History({choice, history}) {
  return (
        <>
            <Title>Historial:  {history}</Title>
            <span>Selección anterior: {choice}</span>
        </>
  );
}

export default History;
