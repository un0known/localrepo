import { useState } from 'react'
import axios from "axios"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [jokes, setJokes] = useState(jokes)

  return (
    <>
      <h1>practice</h1>
      <p>jokes: {jokes.length}</p>

      {
        jokes.map( (jokes, index)=>(
          <div key={jokes.id}>
            <h3>{jokes.title}</h3>
            <h3>{jokes.content}</h3>

          </div>
        ))
      }


    </>
  )
}

export default App