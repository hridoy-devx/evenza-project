
import React, { useState } from 'react'
import Flex from './Flex'
import img from '../assets/img.png'
import FourhCustom from './FourhCustom'
import ReciverCustom from './ReciverCustom'
import recive from '../assets/recive.png'
import recive2 from '../assets/recive.png'
import Btn from './Btn'
import call from '../assets/call.png'
import Container from './Container'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import modalimg from '../assets/imglatest.png'

const FourthPart = () => {

     
 const [Show,setshow]=useState('part1')

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>

      <div id='About-us' className=' px-40 py-25 items-center'>
        <Container>

          <div className=' items-center'>
            <Flex className='justify-between items-centern gap-17.75'>
              <div className='w-192.5 h-192.5 '>
                <img src={img} alt="" className='' />
              </div>
              <div>
                <h1 className='text-black'>About Us</h1>
                <h2 className='font-bold text-[48px] mt-2.5 mb-4.25 w-170.75 '> Behind this event</h2>
                <p className='text-3.5 text[#737681] leading-6.5 w-[715px] font-normal align-middle '>Discover the vision that drives this
                  event—a commitment to
                  bringing together innovators,eaders, and chang
                  emakers to share knowledge spark inspiration, and
                  create meaningfulconnecions.</p>
                <div className='py-5 bg-[#F6F6F7] w-195.25 rounded-2xl text-center p-8 mt-10.5 mb-[42px]'>
                  <Flex className='justify-between items-center text-center'>
                     <h1 onClick={() => setshow('part1')} className={` px-16.75 py-5 text-black bg-white ${
      Show === 'part1' ? ' bg-red-800  font-bold' : 'bg-transparent text-black'
    }  `}>Our Vision</h1>
    
                       <h1 onClick={() => setshow('part2')} className={`px-17 py-5 text-black bg-white ${
      Show === 'part2' ? 'bg-blue-500 font-bold' : 'bg-transparent text-red'
    }  `}>our goal</h1>
                      
                       <h1 onClick={() => setshow('part3')} className={`px-17 py-5 text-black bg-white ${
      Show === 'part3' ? 'bg-amber-50  font-bold' : 'bg-transparent'
    }  `}>Our mission</h1>
                  </Flex>
                  

                </div>

                  {/* {part1} */}


                   {Show === 'part1' && (
               
                <p className='text-3.5 text[#737681] leading-6.5 w-[715px] font-normal  mb-[60px] align-middle'>Our vision is to build a global community where collaboration fuels innovation we aim encourage
                  fresh thinking, spark inspiring dialogues, and create a space.</p>

     
        )}    
                      {Show === 'part2' && (
               
                <p className='text-3.5 text-gray-500  text[#737681] leading-6.5 w-[715px] font-normal  mb-[60px] align-middle'>My ultimate goal in life is to build a purposeful career, foster meaningful relationships, and continuously learn.</p>

     
        )}

                      {Show === 'part3' && (
               
                <p className='text-3.5 font-bold leading-6.5 w-[715px] font-normal  mb-[60px] align-middle'>A mission statement explains your 
                core purpose and goals. It tells others what you do, who you help, and why it matters.</p>

     
        )}

                <div className=''>
                  <Flex className='items-center gap-[90px]'>
                    <ReciverCustom
                      imges={recive}
                      Rtext='Receive real-time event
updates.'
                    />

                    <ReciverCustom
                      imges={recive2}
                      Rtext='Receive real-time event
updates.'
                    />
                  </Flex>
                </div>

                <div onClick={handleOpen} className='mt-17'>

                  <Flex className='gap-6'>
                    <Btn>Learn More About</Btn>
                    <img src={call} alt="" />
                    <div>
                      <h1>Call Now!</h1>
                      <a href="#">+00 123 456 789</a>
                    </div>

                  </Flex>
                </div>

                        <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="child-modal-title"
                        aria-describedby="child-modal-description"
                      >
                                      
                         <img src={modalimg} alt="" className='w-50 h-50 mx-auto mt-50' />
                       
                         
                      </Modal>

                      


                  

              </div>
            </Flex>
          </div>
        </Container>
      </div>
    </>
  )
}

export default FourthPart
