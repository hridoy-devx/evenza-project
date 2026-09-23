import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaArrowRight } from "react-icons/fa6";
import imglatest from '../assets/imglatest.png'

const LatestCstm = () => {
    return (
        <div>

            <div className='w-180.25 h-88.5 bg-[#F6F6F7]  rounded-[20px]'>

                <div className='flex items-center '>

                    <div className='p-3 w-[334px] h-83.5 mt-20'>
                        <img src={imglatest} alt="" />
                    </div>

                    <div className='pl-7.25 pr-19.75'>

                        <div className='flex gap-2.50'>
                            <CgProfile
                                className='text-primary'
                            />
                            <h1 className='font-medium text-[16px] leading-[100%]'>Esther Howard</h1>
                        </div>
                       
                        <h1 className='text-[20px] leading-[28px] font-bold mt-[23px]'>Simple Self-Defense Skills
Everyone Should Learn for
Safety</h1>

              <h1 className='w-77 border h-px bg-[#161A2D1A] mt-19.75'></h1>
                          
                         <div className='flex gap-2.50 text-primary mt-8 items-center'>
                                                 <h1>read more</h1>
                                                 <FaArrowRight />
                                             </div>
                         

                    </div>


                </div>



            </div>



        </div>
    )
}

export default LatestCstm
