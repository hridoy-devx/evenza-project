import React from 'react'
import Flex from './Flex'
import symbol from '../assets/Symbol.png'
import Btn from './Btn'

const PricingCustom = ({className,pricinglogo,pricintxt1,pricintxt2} ) => {
  return (
    <>
      
    <div className={`w-117.75 hover:scale-110 transition h-168.5 bg-[#F6F6F7]  rounded-[20px] mt-18.75 ${className} `}>

        

          <div className='py-10 px-10'>

       <Flex className='gap-2.75'>
       <div>
        <img src={pricinglogo} alt="" />
       </div>
       <div>
        <h1 className='font-bold'>{pricintxt1} </h1>
        <h2 className=''>Perfect for first-time attend</h2>
        </div>
       </Flex>

         <Flex className='gap-2.25 mt-10.25'>
            <h1 className='font-bold text-[48px] leading-13 items-center'>{pricintxt2} </h1>
          <h2 className='mt-[26px]'>   /One-Time</h2>
         </Flex>
         </div>


         <div className='mx-auto h-[449px] w-[451px] rounded-[10px] bg-[#FFFFFF] pb-3 p-10 '>
            <div className=''>

            <h1 className='text-[20px] leading-5.5 text-black'>What's Included:</h1>
            <h2>It could relate to a subscription</h2>
            </div>


            <div className='mt-21'>

             <Flex className='gap-0.5 mt-4.5'>
              <img src={symbol} alt="" />
              <h1>Entry to all standard sessions</h1>
             </Flex>

              <Flex className='gap-0.5 mt-4.5'>
              <img src={symbol} alt="" />
              <h1>Reserved seating in select session</h1>
             </Flex>
 <Flex className='gap-0.5 mt-4.5'>
              <img src={symbol} alt="" />
              <h1>Meet & greet with speakers</h1>
             </Flex>
 <Flex className='gap-0.5 mt-4.5'>
              <img src={symbol} alt="" />
              <h1>Premium networking lounge</h1>
             </Flex>

             
             <button className='bg-primary py-3.75 w-92.75 rounded-full mt-10.5'>
              Get Standard Pass

             </button>



            </div>


            </div>


         </div>


        </>

  
     



  )
}

export default PricingCustom
