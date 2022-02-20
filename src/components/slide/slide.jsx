import React, { useState, useEffect } from "react";
import data from "../../data.json";
import Option from "../Option/option";
import History from "../History/history";
import Storyline from "../Storyline/storyline";
import useStory from "../hooks/useStory";
import { Container, OptionContainer } from "./styled";

function Slide() {
  //custom hook
  const [stories, getStories] = useStory([])
  const [currentStory, setCurrentStory] = useStory("")
  //opcion elegida
  const [optionSelected, setOptionSelected] = useState("");
  //historial de opciones
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getData = () => {
      const response = data.map(
        ({ id, historia: storyText, opciones: option }) => ({
          id,
          storyText,
          option,
        })
      );
      getStories(response);
    };
    getData();
  }, []);

  const handleClick = (e) => {
    setOptionSelected(e.target.textContent);
    setHistory((optionSelected) => [...optionSelected, e.target.textContent]);
  };

  console.log(stories)


  return (
    <Container>
      <div>
          <Storyline storyText="{currentStory}"/>
          <OptionContainer>
            <Option onClick={handleClick} btnText="A" spanText="{currentA}" />
            <Option onClick={handleClick} btnText="B" spanText="{currentB}" />
          </OptionContainer>
          <History choice={optionSelected} history={history} />
        </div>
    </Container>
  );
}

export default Slide;


