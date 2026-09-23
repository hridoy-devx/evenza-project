import React, { useState } from 'react'
import Container from './Container'
import playbtn from '../assets/playbtn.png'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Pulsea from './Pulsea';
import alibanat from '../assets/alibanat.mp4'




export default function PlayVideo() {

  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (

    <div className='bg-[url(./assets/videog.png)] bg-center bg-cover bg-no-repeat py-97.75  '>
      <Container>

         <div>
            
            <div className='flex items-center justify-center'>
            <div className='relative inline-block'>
              <img src={playbtn} alt=""  onClick={handleOpen} className=' mt-10'/>
            <Pulsea
            className=' absolute top-23 left-1/2 -translate-x-1/2 -translate-y-1/2'
            />
          </div>
          </div>
         
         <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
         

         <video src={alibanat} autoPlay controls className='h-120 w-200 mx-auto mt-50  '></video>
         
      </Modal>
        
       
         </div>

      </Container>
    

    </div>
  )
}
