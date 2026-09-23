import React from 'react'
import Flex from './Flex'
import location from '../assets/location.png'



const DaysCustom = ({ daysimg1,daytext1,daytext2,daytext3,daytext4,daytext5,daytext6,location} ) => {
  return (
    
    <div className='w-[1246px] mx-auto text-white mt-[86px]'>
        <Flex className='gap-7.5 items-center'>
        <div>
            <img src={daysimg1} alt="" />
        </div>

          <div>
            <h1>{daytext1} </h1>
            <h2 className='mt-2.75'>{daytext2} </h2>
          </div>

          <div className=''>
            <h1 className='text-[20px] leading-5 align-middle font-bold'>{daytext3} </h1>
            <h2 className=' align-middle text-lg leading-[25px] w-[545px] mt-3'> {daytext4} </h2>
          </div>
          
          <div>

          <Flex className='items-center gap-3.25'>

            <div className=' border bg-[#FFFFFF1A] rounded-[30px] w-12.5 h-12.5 p-3.75 '>
            <img src={location} alt=""  className='bg-red-400' />
            </div>
            <div>

            <h1> {daytext5}
</h1>
<h2 className='mt-3'>
    {daytext6} </h2>
            </div>
          </Flex>
          </div>
</Flex>
    </div>
  )
}

export default DaysCustom
