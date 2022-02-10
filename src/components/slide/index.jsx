import React, {useState} from "react";
import Option from "../option";
import History from "../history";
import Storyline from "../storyline";

function Slide() {

const [option, setOption] = useState("")

const handleClick = e => {
    setOption(e.target.textContent)
}

  return (
        <>
        <Storyline storyText="h"/>
        <Option onClick={handleClick} btnText="A" spanText="Lorem"/>
        <Option onClick={handleClick} btnText="B" spanText="Lorem ipsum"/>
        <History choice={option} />
        </>
  );
}

export default Slide;
