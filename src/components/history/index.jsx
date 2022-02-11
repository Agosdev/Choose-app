import React from "react";
import {Title, Span} from "./styled"

function History({choice}) {
  return (
        <>
            <Title>Historial de opciones elegidas</Title>
            <Span>Selección anterior: {choice}</Span>
        </>
  );
}

export default History;
