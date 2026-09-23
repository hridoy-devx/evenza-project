import React, { useState } from 'react'
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const FaqsScnd = ( {caroseltxt1,caroseltxt2} ) => {


     const [Show,setShow]=useState(false)

  return (
    <div>

        <div className='mt-9 bg-[#F6F6F7] py-5.75 px-6.75 rounded-[20px] w-200'>
            <div onClick={()=>setShow(!Show)} className='flex justify-between'>
                <h1 className='text-[18px] font-semibold leading-6 '>{caroseltxt1}</h1>

                {
                    Show ?
                      <FaMinusCircle className='text-2xl text-primary' />
                      :<FaPlusCircle className='text-2xl text-primary ' />

                }


            </div>

              {
                Show ?
                    
                <div className='  bg-[#F6F6F7] py-5.75 px-6.25 '>
                    <p className='text-[16px] font-normal leading-6 text-[#737681]'> {caroseltxt2} </p>
                </div>
                :null
              }

        </div>
      
    </div>
  )
}

export default FaqsScnd
