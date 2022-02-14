import React from "react";
import {Title} from "./styled"

function History({choice, choices}) {
  return (
        <>
            <Title>Historial:  {choices}</Title>
            <span>Selección anterior: {choice}</span>
        </>
  );
}

export default History;
