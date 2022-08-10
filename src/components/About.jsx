import React from 'react'

const About = () => {
  return (
    <div name = 'about' className = 'w-full my-11'>
        <div className = ' max-width-[1240px] mx-auto my-5 md:my-1 '>
                <div className = 'text-center '>
                    <h2 className = 'text-5xl font-bold'>Trusted by Devs All Around the World!</h2>
                    <p className = 'text-2xl py-6 text-gray-500' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt blanditiis ratione cum odio dolores id tenetur facilis possimus delectus, eligendi voluptatum quasi inventore ad voluptatibus sequi reiciendis deleniti exercitationem rerum.</p>
                </div>
                
                <div className = 'grid grid-cols-1 md:grid-cols-3 gap-1 px-2 text-center'>
                          <div className=      'border py-8  rounded-xl shadow-xl'>
                                <p className = 'text-center font-bold text-6xl  text-indigo-600'>100%</p>
                                <p className = 'text-center text-gray-400 mt-2'>Completion</p>
                          </div>
                          
                          <div className=      'border py-8  rounded-xl shadow-xl'>
                          <p className = 'text-center font-bold text-6xl  text-indigo-600'>One Day</p>
                                <p className = 'text-center text-gray-400 mt-2'>Dilevery</p>
                          </div>
                          
                          <div className=      'border py-8  rounded-xl shadow-xl'>
                                <p className = 'text-center font-bold text-6xl  text-indigo-600'>You will</p>
                                <p className = 'text-center text-gray-400 mt-2'>read this..LoL</p>
                          </div>
                </div>
        </div>
    </div>
  ) 
}

export default About
