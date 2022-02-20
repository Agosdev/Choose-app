import React, { useState, useEffect } from "react";
import Option from "../option";
import History from "../history";
import Storyline from "../Storyline/storyline";
import { Container, OptionContainer } from "./styled";

function Slide() {
  //botones de empezar y terminar el juego
  const [start, setStart] = useState(false);
  const [end, setEnd] = useState(false);

//copia del original story para recorrer A y B
  const [path, setPath] = useState([]);
//mostrar la frase de historia segun el valor de option
  const [story, setStory] = useState("");
//tomar valor elegido por el boton y mostrar el historial
  const [option, setOption] = useState("");
  const [options, setOptions] = useState([]);
//avanzar a la -siguiente- story segun opcion
  const [next, setNext] = useState(0);
  //mostrar las opciones segun el camino elegido
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  //almacenar el recorrido 
  const [storyLineA, setStoryLineA] = useState("");
  const [storyLineB, setStoryLineB] = useState("");

  useEffect(() => {
    const data = require("../../data.json");
    const getData = () => {
      const res = data.map((path) => {
        const story = {
          id: path.id,
          storyText: path.historia,
          option: path.opciones,
        };
        return story;
      });
      setPath(res);
    };
    getData();
  }, []);

  const showFirstStory = (e) => {
    setStart(true);
    setStory(path[0].storyText);
    setTextA(path[0].option.a);
    setTextB(path[0].option.b);

    const Aline = path.filter((side) => (side.id.includes("a") ? side : null));

    setStoryLineA(Aline);

    const Bline = path.filter((side) => (side.id.includes("b") ? side : null));

    setStoryLineB(Bline);
  };

  const handleClick = (e) => {
    setOption(e.target.textContent);
    setOptions([...options, e.target.textContent])

    setNext(next + 1);
    if (next < 4) {
      if (e.target.textContent === "A") {
        setStory(storyLineA[next].storyText);
        setTextA(storyLineA[next].option.a);
        setTextB(storyLineA[next].option.b);
      } else if (e.target.textContent === "B") {
        setStory(storyLineB[next].storyText);
        setTextA(storyLineB[next].option.a);
        setTextB(storyLineB[next].option.b);
      }
    } else {
      setEnd(true);
    }
  };

  const reset = (e) => {
    setNext(0);
    setOption("")
    setOptions([])
    setStory(path[0].storyText);
    setTextA(path[0].option.a);
    setTextB(path[0].option.b);
  };

  return (
    <Container>
      <button
        className={start ? "start__btn hide" : " start__btn"}
        onClick={showFirstStory}
      >
        ¿Listo para empezar?
      </button>
      {end ? (
        <span>GAME OVER</span>
      ) : (
        <>
          <div className={start ? "show" : "hide"}>
            <Storyline storyText={story} />
            <OptionContainer>
              <Option onClick={handleClick} btnText="A" spanText={textA} />
              <Option onClick={handleClick} btnText="B" spanText={textB} />
              <button className="back__btn" onClick={reset}>
                Reiniciar juego
              </button>
            </OptionContainer>
            <History choice={option} choices={options}/>
          </div>
        </>
      )}
    </Container>
  );
}

export default Slide;
