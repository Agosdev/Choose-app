import React from "react";
import {Button, Span} from "./styled"

function Option({btnText, onClick, spanText}) {
  

  return (
        <>
         <Button className="option__btn" onClick={onClick}>{btnText}</Button>
         <Span>{spanText}</Span>
        </>
  );
}

export default Option;
