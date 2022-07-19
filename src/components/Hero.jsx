import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirship,
    ServerIcon,
}from '@heroicons/react/solid'

import bgimg from '../assets/cyber-bg.png'
import { PaperAirplaneIcon } from '@heroicons/react/outline'


const Hero = () => {
  return (
<div className = 'w-full h-screen bg-zinc-200 flex flex-col justify-between'> 
                {/* below we are using grids and its use to make grid in a wesite..
                 or arrange items both verical and horizontal.. */}
        <div className= 'grid md:grid-cols-2 max-w-[1240px] m-auto'> 
            
            <div className= 'flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>This is Some Tech Jargin</p>
                <h1 className= 'font-bold text-5xl py-3 md:text-7xl'>This is very important</h1>
                <p className = 'text-2xl'> This.. Not so much</p>
                <button className= 'px-6 py-3 text-xl sm:w-[60%] my-4'> Get Started!</button>
            </div>
            
            <div className = 'my-3'>
                <img className = 'w-full ' src={bgimg} alt="/"  />
            </div>
            
            <div className= ' md:absolute flex flex-col  py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl '>
                <p className = 'font-bold'>Data Services
                </p>
                    <div className = 'flex justify-between flex-wrap px-4'  >
                        <p className = 'px-4 py-2 text-slate-500'><CloudUploadIcon   className = 'h-6 text-indigo-600'/> App Security</p>
                        <p className = 'px-4 py-2 text-slate-500'><DatabaseIcon      className = 'h-6 text-indigo-600'/> Dashboard Design</p>
                        <p className = 'px-4 py-2 text-slate-500'><ServerIcon        className = 'h-6 text-indigo-600'/> Cloud Data</p>
                        <p className = 'px-4 py-2 text-slate-500'><PaperAirplaneIcon className = 'h-6 text-indigo-600'/> API</p>

                    </div>
            </div>

          

        </div>
      
    </div>
  )
}

export default Hero
