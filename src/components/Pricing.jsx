import React from 'react'
import { CheckIcon } from '@heroicons/react/solid'
const Pricing = () => {
  return (
    <div name = 'pricing' className="w-full text-white my-24">
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>
        {/* for background ^ */}
        
        <div className='max-w-[1240px] mx-auto py-12'>

            <div className='text-center py-4 shadow-xl text-slate-300'>
                <h2 className='text-3xl'>Pricing</h2>
                <h3 className='text-4xl text-white font-bold'>The right Price for your research</h3>
                <p className='text-2xl text-slate-300'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error molestias nulla aspernatur eius nihil consequatur, ipsum nostrum laboriosam corrupti eligendi!</p>
            </div>

            <div className='grid md:grid-cols-2'>
                <div className='bg-white rounded-xl shadow-2xl text-slate-900 m-4 p-8 relative' >
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>   
                    

                    <div>
                        <p className = 'text-6xl font-bold py-4 flex'>500₹<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                    </div>

                    <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    <div>
                        <p className = 'flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                        <p className = 'flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                        <p className = 'flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                        <p className = 'flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                        <p className = 'flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                        <button className = 'w-full my-4 py-3 text-2xl'>Get Started</button>
                    </div>
                </div>

                <div className='bg-white rounded-xl shadow-2xl text-slate-900 m-4 p-8 relative' >
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premuim</span>   
                    

                    <div>
                        <p className = 'text-6xl font-bold py-4 flex'>1100₹<span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                    </div>

                    <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    <div>
                        <p className = 'flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                        <p className = 'flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                        <p className = 'flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                        <p className = 'flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                        <p className = 'flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                        <button className = 'w-full my-4 py-3 text-2xl'>Get Started</button>
                    </div>
                </div>

            </div>

        

        </div>
      
    </div>
  )
}

export default Pricing
