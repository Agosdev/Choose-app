import React from "react";

function Option({btnText, onClick, spanText}) {
  return (
        <>
            <div className="option__container">
                <button className="option__btn" onClick={onClick}>{btnText}</button>
                <span>{spanText}</span>
            </div>
        </>
  );
}

export default Option;
