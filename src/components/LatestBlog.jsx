import React from 'react'
import Container from './Container'
import latestbg from '../assets/latestbg.png'
import { CgProfile } from "react-icons/cg";
import CommonFast from './CommonFast';
import { FaArrowRight } from "react-icons/fa6";
import LatestCstm from './LatestCstm';

const LatestBlog = () => {
  return (
    <div className='py-26.75 px-55.75 '>
        <Container>
         <div>
             
             <div>
                <CommonFast
                fastcmntext='Latest Blog'
                scomntext='Explore our latest insights stories
and updates'
                />
             </div>

             <div className='flex justify-between items-center mt-18.75'>

           <div className='w-180.25 h-186 bg-[#F6F6F7]  rounded-[20px]'>

            <div className='p-3'>
             <img src={latestbg} alt="" className='' />
            </div>

             <div className='pt-[29px] pr-22.25 pl-10 pb-10'>

              <div className='flex gap-2.50'>
                <CgProfile 
                className='text-primary'
                />
                <h1 className='font-medium text-[16px] leading-[100%]'>Esther Howard</h1>
              </div>

                <h1 className='text-[20px] leading-[28px] font-bold mt-[23px]'>Mastering Public Speaking: Expert Tips for Confident</h1>
                <h2 className='text-[16px] font-normal leading-[25px] mt-4.25 text-[#737681]'>Improve your communication skills with proven 
                    techniques used by world-classspeakers to 
                    captivate and inspire audiences.</h2>
                  
                  <h1 className='w-[641px] border h-px bg-[#FFFFFF1A] mt-8'></h1>

                    <div className='flex gap-2.50 text-primary mt-8 items-center'>
                        <h1>read more</h1>
                        <FaArrowRight />
                    </div>


             </div>

           </div>
           <div>

           <div>
            <LatestCstm/>
           </div>
             
              <div className='mt-10'>
            <LatestCstm/>
           </div>
           </div>
           
           
            </div>
         </div>
        </Container>
    </div>
  )
}

export default LatestBlog
