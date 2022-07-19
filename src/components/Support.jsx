import React from 'react'

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline'
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'
import supportImg from '../assets/support.jpg'



const Support = () => {
  return (
    <div className= 'w-full h-screen mt-24'>
        
        <div className= 'w-full h-[700px] bg-gray-900/70 absolute'>
             <img className = 'w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
        </div>


        <div className= 'max-w-[1240] h-screen mt-24 text-white relative'>
           
            <div>
                <h2 className= 'text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                <h2 className= 'text-5xl font-bold py-6 text-center'>Find us!</h2>
                <p className= 'py-4 text-3xl text-slate-300' > Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas id blanditiis quaerat voluptatibus, ea neque sapiente earum atque laborum vel voluptates omnis nobis voluptate qui sint dolore. Sequi, debitis libero?</p>
            </div>


            <div className= 'grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>

                
                <div className = 'bg-white rounded-xl shadow-2xl'>
                    <div className = 'p-8'>
                        <PhoneIcon className = 'w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem] shadow-2xl'/>
                        <h3 className = 'font-bold text-2xl my-2'>Sales</h3>
                        <p className = 'text-gray-600 text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit repellendus dolorem accusamus repudiandae porro animi, et blanditiis id consequuntur amet?</p>
                    </div>

                    <div>
                        <p className = 'ml-7 mb-4'>Contact US <ArrowSmRightIcon className = 'w-6 ml-2 text-indigo-600'/> </p>
                    </div>

                    
                </div>

            
            </div>
        
        </div>        

    </div>
  )
}

export default Support
