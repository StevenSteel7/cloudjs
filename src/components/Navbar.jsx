import React,{useState} from 'react'

import {MenuIcon, XIcon} from '@heroicons/react/outline'





const Navbar = () => {
  
  
  
    const [nav,setnav] = useState(false)
    const handleClick = () => setnav(!nav);   //Its a function
    
  
  
  
  
  
  
    return (
    <div className = 'w-screen h-[80px] bg-zinc-200 fixed drop-shadow-lg'>
                                                            
        <div className = 'px-2 flex justify-between items-center w-full h-full'>
            {//px-2 is padding on x axis from left and right( 0.5 rem or 8px)
            // flex -> its a flex container
            }
            <div className = 'flex items-center '>
                <h1 className = 'text-3xl font-bold mr-4 sm:text-4xl'> BRAND.</h1>
                    <ul className = 'hidden md:flex'> 
                    {/* hidden till the prdefind mid length */}
                       <li>Home</li>
                        <li>About</li>
                        <li>Support</li>
                        <li>Platforms</li>
                        <li>Pricing</li>
                    </ul>
                
            </div>
            
            <div className = 'hidden md:flex p-4'>
                <button className= 'border-none bg-transparent text-black mr-4'>Sign in</button>
                <button className= 'px-6 py-2'>Sign out</button>
            </div>

            <div className = 'md:hidden' onClick = {handleClick}>
                {/*   hidden the hamburger icon if less than 768 pixel
                    And we will also use ternary operator to handle the click event */}
                {!nav ? <MenuIcon className='w-5'/> :<XIcon className= 'w-5'/>}
                
            </div>



        </div>
        
    <ul className = {!nav ? 'hidden':'absolute bg-zinc-200 w-full px-8'}>
                    <li className='border-b-2 border-zinc-300 w-full'>Home</li>
                    <li className='border-b-2 border-zinc-300 w-full'>About</li>
                    <li className='border-b-2 border-zinc-300 w-full'>Support</li>
                    <li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
                    <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
                    <div className = 'flex flex-col my-4'>
                        <button className= 'bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign in</button>
                        <button className= 'px-8 py-3'>Sign out</button>
                    </div>
    </ul>
        
    </div>
  )
  
}

export default Navbar
