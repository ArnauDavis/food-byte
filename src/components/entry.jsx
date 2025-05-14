function Entry({props}) {
    // bg-slate-200 bg-gray-200 bg-zinc-200 bg-neutral-200 bg-stone-200 bg-red-200 bg-orange-200 bg-amber-200 bg-yellow-200 bg-lime-200 bg-green-200 bg-emerald-200 bg-teal-200 bg-cyan-200 bg-sky-200 bg-blue-200 bg-indigo-200 bg-violet-200 bg-purple-200 bg-fuchsia-200 bg-pink-200 bg-rose-200
// from-slate-200 from-gray-200 from-zinc-200 from-neutral-200 from-stone-200 from-red-200 from-orange-200 from-amber-200 from-yellow-200 from-lime-200 from-green-200 from-emerald-200 from-teal-200 from-cyan-200 from-sky-200 from-blue-200 from-indigo-200 from-violet-200 from-purple-200 from-fuchsia-200 from-pink-200 from-rose-200
// to-slate-600 to-gray-600 to-zinc-600 to-neutral-600 to-stone-600 to-red-600 to-orange-600 to-amber-600 to-yellow-600 to-lime-600 to-green-600 to-emerald-600 to-teal-600 to-cyan-600 to-sky-600 to-blue-600 to-indigo-600 to-violet-600 to-purple-600 to-fuchsia-600 to-pink-600 to-rose-600
// text-slate-600 text-gray-600 text-zinc-600 text-neutral-600 text-stone-600 text-red-600 text-orange-600 text-amber-600 text-yellow-600 text-lime-600 text-green-600 text-emerald-600 text-teal-600 text-cyan-600 text-sky-600 text-blue-600 text-indigo-600 text-violet-600 text-purple-600 text-fuchsia-600 text-pink-600 text-rose-600
// marker:text-slate-400 marker:text-gray-400 marker:text-zinc-400 marker:text-neutral-400 marker:text-stone-400 marker:text-red-400 marker:text-orange-400 marker:text-amber-400 marker:text-yellow-400 marker:text-lime-400 marker:text-green-400 marker:text-emerald-400 marker:text-teal-400 marker:text-cyan-400 marker:text-sky-400 marker:text-blue-400 marker:text-indigo-400 marker:text-violet-400 marker:text-purple-400 marker:text-fuchsia-400 marker:text-pink-400 marker:text-rose-400
    return (
        <div className={`bg-${props.backgroundColor}-200 grid place-items-center sm:grid-cols-2 gap-4 px-2 py-10 rounded-xl md:flex-row items-stretch md:grid md:grid-cols-2 md:max-w-3xl md:gap-4 md:p-5`}>
            <section className="max-w-sm overflow-hidden rounded-xl md:h-full">
                <img className="w-full h-full object-cover" 
                src= {props.img.src}
                alt={props.img.alt}/>
            </section>
            <section className="text-black text-left">
                <h2 className="uppercase text-4xl font-sans">{props.item}</h2>
                <p className="uppercase text-xl font-extralight mb-2">{props.itemDes}</p>
                <p className="font-extralight text-xl mb-4"><span className='text-5xl font-light'>${props.dollar}</span>.{props.cents}</p>
                <p className="font-light mb-4">
                    {props.intro}
                </p>
                <section className="flex gap-5 content-stretch justify-center mb-6">
                    <button className={`flex-grow font-semibold rounded-xl text-white bg-gradient-to-b from-${props.backgroundColor}-200 to-${props.backgroundColor}-600 uppercase pt-2 pb-2 px-10 ml-10 hover:bg-gradient-to-br md:flex-none`}>
                      add to cart</button>
                    <svg class={`size-10 text-${props.backgroundColor}-600 mr-10 transition-transform hover:scale-125 duration-300`}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </section>
                <p class="uppercase ml-2 font-light text-xl">features</p>
                <ul className={`list-disc ml-2 marker:text-${props.backgroundColor}-400`}>
                    <li><span className="font-semibold">{props.feature1}: </span><span className="font-light text-gray-600">{props.feature1des}</span></li>
                    <li><span className="font-semibold">{props.feature2}: </span><span className="font-light text-gray-600">{props.feature2des}</span></li>
                    <li><span className="font-semibold">{props.feature3}: </span><span className="font-light text-gray-600">{props.feature3des}</span></li>
                    <li><span className="font-semibold">{props.feature4}: </span><span className="font-light text-gray-600">{props.feature4des}</span></li>
                    <li><span className="font-semibold">{props.feature5}: </span><span className="font-light text-gray-600">{props.feature5des}</span></li>
                </ul>
            </section>
        </div>
    )
}

export default Entry