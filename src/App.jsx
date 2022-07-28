import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import useSound from 'use-sound'

function App() {
  const [playBuzz] = useSound("/bzzz.mp3") 
  const [playScream] = useSound("/scream.mp3") 

  const handleClick = () =>{
    let num = Math.floor(Math.random() * 21);
    if(num == 20){
      playScream();
    }
    playBuzz();
  }

  return (
    <div className="App">
      <button onClick={() => handleClick()}>Click Me!</button>
    </div>
  )
}

export default App
