import React from "react";
import {Title} from "./styled"

function History({choice}) {
  return (
        <>
            <Title>Historial</Title>
            <span>Selección anterior: {choice}</span>
        </>
  );
}

export default History;
