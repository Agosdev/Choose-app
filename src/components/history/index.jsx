import React from "react";

function History({choice}) {
  return (
        <>
            <div className="history__container">
                <h3>Historial de opciones elegidas</h3>
                <span>Selección anterior: {choice}</span>
            </div>
        </>
  );
}

export default History;
