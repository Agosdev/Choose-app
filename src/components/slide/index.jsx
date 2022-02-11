import React, {useState, useEffect} from "react";
import Option from "../option";
import History from "../history";
import Storyline from "../storyline";
import {Container, OptionContainer} from "./styled"

function Slide() {

const [start, setStart] = useState(false)
const [path, setPath] = useState([])
const [story, setStory] = useState("")
const [option, setOption] = useState("")
const [next, setNext] = useState(0)
const [textA, setTextA] = useState("")
const [textB, setTextB] = useState("")

useEffect(()=> {
  const data = require('../../data.json')
  const getData = () => {
    const res = data.map(path => {
      const story = {
        id: path.id,
        storyText: path.historia,
        option: path.opciones
      }
      return story
      }
      )
      setPath(res)
      }
    getData()
},[])


const showFirstStory = e => {
  setStory(path[0].storyText)
  setTextA(path[0].option.a)
  setTextB(path[0].option.b)
  setStart(true)
}

const handleClick = e => {
    setOption(e.target.textContent)
    // const choiceRandom = Math.floor(Math.random() * path.length)
    // const choiceSelected = path[choiceRandom].storyText
    // setStory(choiceSelected)
    let i = next+1
    if (i<8) {
      setNext(i)
      setStory(path[i].storyText)
      setTextA(path[i].option.a)
      setTextB(path[i].option.b)
      }
  }


  return (
        <Container>
            <button className={start ? "start__btn hide" : "start__btn"} onClick={showFirstStory}> ¿Listo para empezar?</button>
            <div className={start ? "show" : "hide"}>
                <Storyline storyText={story}/>
                <OptionContainer>
                    <Option onClick={handleClick} btnText="A" spanText={textA}/>
                    <Option onClick={handleClick} btnText="B" spanText={textB}/>
                </OptionContainer>
                <History choice={option} />
            </div>
         </Container>
  );
}

export default Slide;
