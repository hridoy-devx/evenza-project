 import React from 'react'
import Flex from './Flex'
 
 const ReciverCustom = ({imges,Rtext}) => {
   return (
     <>
       <div className=''>
        <Flex className='gap-3.75 items-center'>
            <img src={imges} alt="" />
            <h1 className='text-black text-[20] font-bold'>{Rtext}</h1>
        </Flex>
       </div>
     </>
   )
 }
 
 export default ReciverCustom
 