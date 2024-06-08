import { useState } from 'react'
import './App.css'
import AddItem from './LeftSide/AddItem/AddItem'


function App() {
  const [count, setCount] = useState(0);


  return (
    <>
   <AddItem></AddItem>

    </>
  )
}

export default App
