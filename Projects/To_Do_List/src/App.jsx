import { useState } from 'react'
import './App.css'
import AddItem from './LeftSide/AddItem/AddItem'
import { MyProvider } from './MyProvider'
import Details from './RightSide/Details/Details'

function App() {
  return (
    <MyProvider>
      <div className='dispFlex'>
            <AddItem />
            <Details />
            </div> 
        </MyProvider>

  )
}

export default App
