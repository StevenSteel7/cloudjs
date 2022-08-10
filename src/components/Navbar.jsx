import React,{useState} from 'react'
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll } from 'react-scroll'

import {MenuIcon, XIcon} from '@heroicons/react/outline'





const Navbar = () => {
  
  
  
    const [nav,setnav] = useState(false)
    const handleClick = () => setnav(!nav);   //Its a function
    
  
  
  
  
  
  
    return (
    <div className = 'w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
                                                            
        <div className = 'px-2 flex justify-between items-center w-full h-full'>
            {//px-2 is padding on x axis from left and right( 0.5 rem or 8px)
            // flex -> its a flex container
            }
            <div className = 'flex items-center '>
                <h1 className = 'text-3xl font-bold mr-4 sm:text-4xl'> FreeCharge</h1>
                    <ul className = 'hidden md:flex'> 
                    <li><Link  to="home" smooth={true} offset={50} duration={500} >Home</Link></li>
                    <li><Link  to="about" smooth={true} offset={-130} duration={500} >About</Link></li>
                    <li><Link  to="support" smooth={true} offset={-110} duration={500} >Support</Link></li>
                    <li><Link  to="platforms" smooth={true} offset={-100} duration={500} >Platforms</Link></li>
                    <li><Link  to="pricing" smooth={true} offset={-90} duration={500} >Pricing</Link></li>

                    {/* hidden till the prdefind mid length */}
                       
                    </ul>
                
            </div>
            
            <div className = 'hidden md:flex p-4'>
                <button className= 'border-none bg-transparent text-black mr-4'>Sign in</button>
                <button className= 'px-6 py-2'>Sign out</button>
            </div>

            <div className = 'md:hidden mr-4' onClick = {handleClick}>
                {/*   hidden the hamburger icon if more than 768 pixel
                    And we will also use ternary operator to handle the click event */}
                {!nav ? <MenuIcon className='w-5'/> :<XIcon className= 'w-5'/>}
                
            </div>



        </div>
        
    <ul className = {!nav ? 'hidden':'absolute bg-zinc-200 w-full px-8'}>
                    <li className='border-b-2 border-zinc-300 w-full'><Link  to="home" smooth={true} offset={50} duration={500} onClick = {handleClick}>Home</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link  to="about" smooth={true} offset={-130} duration={500} onClick = {handleClick}>About</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link  to="support" smooth={true} offset={-110} duration={500} onClick = {handleClick}>Support</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link  to="platforms" smooth={true} offset={-100} duration={500} onClick = {handleClick}>Platforms</Link></li>
                    <li className='border-b-2 border-zinc-300 w-full'><Link  to="pricing" smooth={true} offset={-90} duration={500} onClick = {handleClick}>Pricing</Link></li>
                    
                    <div className = 'flex flex-col my-4'>
                        <button className= 'bg-transparent text-indigo-600 px-8 py-3 mb-4'>Sign in</button>
                        <button className= 'px-8 py-3'>Sign out</button>
                    </div>
    </ul>
        
    </div>
  )
  
}

export default Navbar
