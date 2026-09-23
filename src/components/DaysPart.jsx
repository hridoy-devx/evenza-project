import React, { useState } from 'react'
import Container from './Container'
import headimg from '../assets/heading.png'
import Flex from './Flex'

import CommonFast from './CommonFast'
import Day1Custom from './Day1Custom'
import Days2 from './Days2'
import Dayas3 from './Dayas3'


const DaysPart = () => {

    const [activeDay,setactiveday] =useState('Day 01')

  return (
    <div id='scdule' className='py-25 bg-[url(./assets/corebg.png)] bg-center bg-cover bg-no-repeat px-83.5'>

     <Container>

      <div>

      <CommonFast
      fastcmntext='Our Event Schedule'
      scomntext='Explore the complete schedule for
our event'
     className='text-white'
      
      />
         </div>

          
         <div className='w-125.25 h-19.75 bg-[#FFFFFF1A]  rounded-[100px] p-5 mx-auto items-center mt-18.75'>
            <Flex className='gap-16.75 justify-center '>

<div 
    onClick={() => setactiveday('Day 01')} 
    className={`w-[140px] rounded-[100px]  bg-black py-2 text-center transition-all ${
      activeDay === 'Day 01' ? 'bg-white  font-bold' : 'bg-transparent text-white'
    }`}
  >
    <h1>Day 01</h1> 
  
  </div>
          {/* Day 2 Button */}
          <div 
    onClick={() => setactiveday('Day 02')} 
    className={`w-[140px] rounded-[100px] cursor-pointer py-2 text-center transition-all ${
      activeDay === 'Day 02' ? 'bg-white font-bold' : 'bg-transparent text-white'
    }`}
  >
    <h1>Day 02</h1> 
    
  </div>
          
          {/* Day 3 Button */}
          <div 
    onClick={() => setactiveday('Day 03')} 
    className={`w-[140px] rounded-[100px] cursor-pointer py-2 text-center transition-all ${
      activeDay === 'Day 03' ? 'bg-white  font-bold' : 'bg-transparent text-white'
    }`}
  >
    <h1>Day 03</h1> 
  </div>
                {/* Day 3 Button */}
                
          
          </Flex>
          </div>
   

    
    
    {/* --- Day 1 Content --- */}
        {activeDay === 'Day 01' && (
      
    <div className=''>

     <Day1Custom/>

      </div>

     
        )}

        
    {/* --- Day 1 Content --- */}
        {activeDay === 'Day 02' && (

           <Days2/>
        )}
        
    {/* --- Day 1 Content --- */}
        {activeDay === 'Day 03' && (
        
            
    <div className=''>
      <Dayas3/>
    </div>
        

      
        )}
 
 </Container>
  
    </div>
  )
}

export default DaysPart
