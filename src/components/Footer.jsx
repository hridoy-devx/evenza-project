import React from 'react'
 import Container from './Container'
 import { MdOutlineNotificationsActive } from "react-icons/md";
 import { TbPointerSearch } from "react-icons/tb";
 import { FaFacebook } from "react-icons/fa";
 import { FaLinkedin } from "react-icons/fa";
 import { FaTwitter } from "react-icons/fa";
 import { FaInstagramSquare } from "react-icons/fa";
import UlliCstm from './UlliCstm';
import footerlogo from '../assets/footerlogo.png'
import inputslogo from '../assets/input.png'




const Footer = () => {
  return (
    <>
    
        <footer id='contect' className='bg-[url(./assets/footers.png)] bg-cover bg-center bg-no-repeat py-26.75 px-55 pb-15.5'>

        <Container>
           <div className=''>

              <div className='flex justify-between'>
                <h1 className='text-[48px] leading-[52px] font-semibold text-white w-159.5 h-[]'>Join our newsletter for event
important announcement</h1>
                  <div>
                <div className='flex items-center gap-1'>
                    <MdOutlineNotificationsActive 
                    className='text-white w-10 h-10'/>

                    <h1 className='text-[16px] leading-[23px] font-normal text-[#FFFFFF]'>Stay informed with instant updates delivered straight to
your inbox.</h1>
                </div>
                <div className=' relative'>
                <input type="text" placeholder='' className=' mt-6 w-120 bg-[#FFFFFF1A] rounded-[20px] h-20'
                 />
               
                 <img src={inputslogo} alt="" className=' h-10 w-10 absolute top-10 left-107.5 mx-auto' />

                 </div>

                </div>
              </div>
            
              <h1 className=' mt-[89px] w-full h-px bg-gray-400 border'></h1>


              <div className='mt-23.75 flex justify-between'>
                <div>
                <img src={footerlogo} alt="" />
                <p className='text-[16px] font-normal leading-5.75 text-white mt-8 w-97.25'>Experience a world-class conference designed
to inspire innovation, empower professionals,
and connect leaders from around the globe.</p>
                
                <div className='flex text-white gap-4  mt-11 '>
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagramSquare />
                    <FaLinkedin />

                </div>
                </div>
              
                <div> <UlliCstm/></div>
          
           
              </div>

              <div className='w-full h-px border bg-gray-700 mt-15'></div>

              <h1 className='text-[16px] leading-6 text-white  mx-auto mt-15 w-72.25'>Copyright © 2025 All Rights Reserved.</h1>




 
           </div>


        </Container>

        </footer>
      
    </>
  )
}

export default Footer
