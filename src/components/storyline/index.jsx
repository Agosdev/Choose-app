import React from "react";
import {StoryContainer} from "./styled"

function Storyline({storyText}) {
  return (
        <>
            <StoryContainer>
                <h2>{storyText}</h2>
            </StoryContainer>
        </>
  );
}

export default Storyline;
