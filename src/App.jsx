import { useState } from 'react'

import './App.css'
import Header from './components/header'
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
    <div className="flex flex-col items-center">
    <Header />
    <div flex className="grid grid-cols-1 xl:grid-cols-2 gap-2 p-5">
    {foodData}
    </div>
    </div>
    </>
  )
}

export default App
