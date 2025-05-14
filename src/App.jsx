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
  console.log(foodData)
  return (
    <>
    {foodData}
      {/* <div className="bg-purple-200 grid place-items-center sm:grid-cols-2 gap-4 px-2 py-10 rounded-xl md:flex-row items-stretch md:grid md:grid-cols-2 md:max-w-3xl md:gap-4 md:p-5">    
            <section className="max-w-sm overflow-hidden rounded-xl md:h-full">
                <img className="w-full h-full object-cover" 
                src= {dragon}
                alt="dragonfruit"/>
            </section>
            <section className="text-black text-left">
                <h2 className="uppercase text-4xl font-sans">a single dragonfruit</h2>
                <p className="uppercase text-xl font-extralight mb-2">with steam and spikes</p>
                <p className="font-extralight text-xl mb-4"><span className='text-5xl font-light'>$5</span>.75</p>
                <p className="font-light mb-4">
                    Imagine sinking your teeth into the vibrant, subtly sweet flesh of this stunning dragonfruit, a taste of the tropics that's as delightful to look at as it is to savor.
                </p>
                <section className="flex gap-5 content-stretch justify-center mb-6">
                    <button className="flex-grow font-semibold rounded-xl text-white bg-gradient-to-b from-purple-200 to-purple-600 uppercase pt-2 pb-2 px-10 ml-10 hover:bg-gradient-to-br md:flex-none">
                      add to cart</button>
                    <svg class="size-10 text-purple-600 mr-10 transition-transform hover:scale-125 duration-300"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </section>
                <p class="uppercase ml-2 font-light text-xl">features</p>
                <ul className="list-disc ml-2 marker:text-purple-400">
                    <li><span className="font-semibold">Exotic sweetness: </span><span className="font-light text-gray-600">A subtly sweet and refreshing taste</span></li>
                    <li><span className="font-semibold">Striking appearance: </span><span className="font-light text-gray-600">A visually stunning and unique fruit</span></li>
                    <li><span className="font-semibold">Mild and fresh scent: </span><span className="font-light text-gray-600">A delicate tropical fragrance</span></li>
                    <li><span className="font-semibold">Packed with goodness: </span><span className="font-light text-gray-600">A source of antioxidants and fiber</span></li>
                    <li><span className="font-semibold">Versatile delight: </span><span className="font-light text-gray-600">Enjoy fresh, in smoothies, or as a vibrant garnish</span></li>
                </ul>
            </section>
        </div> */}
        
    </>
  )
}

export default App
