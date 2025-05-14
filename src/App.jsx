import { useState } from 'react'
import dragon from '../src/assets/dragonfruit.jpg'

import './App.css'
import Entry from './components/entry'
import data from './data'

function App() {
  const foodData = data.map((x)=>{
    return(
      <Entry
      key={x.id}
      props={x}
      />
    )
  })
  return (
    <>
    {foodData}
    </>
  )
}

export default App
