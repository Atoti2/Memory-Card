import { useState } from "react"
import Card from "./components/Card"

function App() {
  const colors = ['gray', 'slate', 'red', 'orange', 'amber', 'yellow', 'teal', 'cyan', 'sky', 'blue']
  const [randomColors, setRandomColors] = useState([])
  const [clicked, setClicked] = useState([])
  const [points, setPoints] = useState(0)
  const [allPoints, setAllPoints] = useState([])
  const max = Math.max(...allPoints)

  const randomOrder = (e) => {
    let randomized = colors
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)  
    setRandomColors(randomized)

    setClicked([...clicked, e.target.innerText])
    setPoints(prev => prev + 1)
    if(clicked.includes(e.target.innerText)){
      setAllPoints([...allPoints, points])
      reset()
    }
  }
  function reset(){
    setClicked([])
    setPoints(0)
    
  }

  return(
    <>
    <h1>Points: {points}</h1>
    <h1>Highscore: {allPoints.length && max}</h1>
    {randomColors.length == 0 ? 
    <div className="flex flex-wrap max-w-[1500px] justify-center mt-44 m-auto gap-10">
      {colors.map((color) => {
      return(
        <Card key={color} color={color} click={randomOrder}/> 
      )
    })}
    </div>
    :  <div className="flex flex-wrap max-w-[1500px] justify-center mt-44 m-auto gap-10">
    {randomColors.map((color) => {
    return(
      <Card key={color} color={color} click={randomOrder}/> 
    )
  })}
  </div>
  }
</>
  )

}

export default App
