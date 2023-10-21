import { useState } from 'react'
import './App.css'
import Cat from './CatsApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Cat />
    </>
  )
}

export default App
