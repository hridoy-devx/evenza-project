import React from 'react'
import { FaStar } from "react-icons/fa6";
import Flex from './Flex';


const TestimnialCstm = ({txt1,imgsrct,txt2,txt3} ) => {
  return (
    <div>
        <div  className='w-133.25 h-[420px] hover:scale-105  transition p-10 pr-[47px] bg-[#FFFFFF1A] rounded-[20px]'>

                <Flex className='gap-3'>
              <FaStar 
               className='text-primary'
               />
                  <FaStar 
               className='text-primary'
               />
                  <FaStar 
               className='text-primary'
               />
                  <FaStar 
               className='text-primary'
               />
                  <FaStar 
               className='text-primary'
               />

               
                </Flex>

                <p className='text-[18px] leading-7 font-bold mt-6 text-white '>{txt1}</p>
                   
                   <h2 className='w-80.5 h-px bg-[#FFFFFF1A] mt-17.25'></h2>

                   <div className='flex mt-17.25 gap-4 text-white'>
                    <img src={imgsrct} alt="" />
                    <div>
                        <h1 className='font-bold text-[16px]'> {txt2} </h1>
                        <h2 className='font-normal text-[20px]'>{txt3} </h2>
                    </div>

                   </div>

               </div>
      
    </div>
  )
}

export default TestimnialCstm
