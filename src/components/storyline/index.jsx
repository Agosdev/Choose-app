import React from "react";

function Storyline({storyText}) {
  return (
        <>
            <div className="story__container">
                <h2>{storyText}</h2>
            </div>
        </>
  );
}

export default Storyline;
