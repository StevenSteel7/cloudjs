import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'

const AllinOne = () => {
  return (
    <div name = 'platforms' className='my-32 w-full'>
        <div className='max-w-[1240px] mx-auto px-2'>
            <h2 className='text-5xl font-bold text-center'>All-in-One Platform</h2>
            <p className='text-2xl py-8 text-gray-500 text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, veritatis!</p>



            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>

                <div ClassName='flex'>
                    
                        <div>
                        <CheckIcon className='w-7 mr-3 text-green-600'/>
                        </div>

                        <div>
                        <h3 className='text-lg font-bold'>Easy to Use!</h3>
                        <p className='text-lg pt-2 pb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, veritatis!</p>
                        </div>

                        
                </div>


                <div ClassName='flex'>
                    
                        <div>
                        <CheckIcon className='w-7 mr-3 text-green-600'/>
                        </div>

                        <div>
                        <h3 className='text-lg font-bold'>Easy to Use!</h3>
                        <p className='text-lg pt-2 pb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, veritatis!</p>
                        </div>

                        
                </div>


                <div ClassName='flex'>
                    
                        <div>
                        <CheckIcon className='w-7 mr-3 text-green-600'/>
                        </div>

                        <div>
                        <h3 className='text-lg font-bold'>Easy to Use!</h3>
                        <p className='text-lg pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptates.     </p>
                        </div>

                        
                </div>


                <div ClassName='flex'>
                    
                        <div>
                        <CheckIcon className='w-7 mr-3 text-green-600'/>
                        </div>

                        <div>
                        <h3 className='text-lg font-bold'>Easy to Use!</h3>
                        <p className='text-lg pt-2 pb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, veritatis!</p>
                        </div>

                        
                </div>


            </div>

        </div>

        
      
    </div>
  )
}

export default AllinOne
