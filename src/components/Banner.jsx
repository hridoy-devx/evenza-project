import Container from './Container'
import React, { useState } from 'react'
import Flex from './Flex'
import Btn from './Btn'
import play from '../assets/play.png'
import CountDown from './CountDown'
import borderimg from '../assets/border01.png'
import borderimgs from '../assets/border02.png'
import borderimgt from '../assets/border03.png'
import alibanat from '../assets/alibanat.mp4'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Pulsea from './Pulsea'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


function Banner() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const handleOpen = () => { 
    setOpen(true); 
    setLoading(true); 
    setTimeout(() => {
      setLoading(false);
    }, 1000); 
  };
  
  const handleClose = () => { 
    setOpen(false); 
    setLoading(false); 
  };

  return (
    <>
      <div id='home' className='bg-[url(./assets/banner.jpg)] bg-cover bg-no-repeat bg-center pt-40 pb-16 bg-black/100 '>
        <Container>
          {/* Exact Figma Width 1001px Container Box */}
          <div className='max-w-250.25 mx-auto text-white text-center'>
            
            {/* Top Badge */}
            <div className='w-47.5 py-1.5 h-[34px] bg-[rgba(255,255,255,0.1)] backdrop-blur-md mx-auto px-3 rounded-[100px] border border-white/10 shadow-lg mb-6'>
              <Flex className='items-center justify-center gap-2'>
                <div className='flex -space-x-1'>
                  <img src={borderimg} alt="" className='w-4 h-4 rounded-full' />
                  <img src={borderimgt} alt="" className='w-4 h-4 rounded-full' />
                  <img src={borderimgs} alt="" className='w-4 h-4 rounded-full' />
                </div>
                <div>
                  <h1 className='text-[11px] align-middle font-normal tracking-wide'>Ideas that spark change.</h1>
                </div>
              </Flex>
            </div>

            {/* Main Heading - Exact Figma 76px Bold Match */}
            <h1 className='text-4xl md:text-6xl lg:text-[76px] font-extrabold tracking-[-1.52px] text-white leading-[83.6px] mx-auto mb-4'>
              Connecting Minds to Shape <br />
              Tomorrow's Big Ideas
            </h1>

            {/* Subtitle Description */}
            <p className='mb-8 text-xs md:text-sm text-white max-w-xl mx-auto leading-relaxed font-normal opacity-90'>
              Experience a powerful gathering of visionaries, creators, and industry experts united by one goal—exchanging ideas that spark growth, innovation, and meaningful change.
            </p>
          
            {/* CTA Buttons & Watch Video */}
            <Flex className='gap-5 items-center justify-center pb-8'>
              <Btn>Explore Schedule</Btn>
              
              <div 
                onClick={handleOpen} 
                className='flex items-center gap-10 cursor-pointer group py-2 px-3 rounded-full transition-all duration-300 hover:bg-white/5'
              >
                <div className='relative flex items-center justify-center '>
                  <img src={play} alt="" className='relative z-5 w-10 h-10' />
                  <Pulsea className='absolute w-12 h-12 pointer-events-none' />
                </div>
                <span className='text-xs font-medium tracking-wide text-white group-hover:text-purple-500 transition-colors'>
                  Watch Video
                </span>
              </div>
            </Flex>

            {/* Video Modal */}
            <Modal open={open} onClose={handleClose}>
              <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: { xs: '90%', sm: 800 }, 
                height: { xs: 300, sm: 480 }, 
                bgcolor: '#000',
                boxShadow: 24,
                borderRadius: 3,
                overflow: 'hidden',
                outline: 'none'
              }}>
                {loading && (
                  <Box sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: '#18181b', 
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: 3,
                    zIndex: 10 
                  }}>
                    <Stack spacing={2}>
                      <Skeleton variant="rectangular" width="100%" height="70%" sx={{ bgcolor: 'grey.800' }} />
                      <Skeleton variant="rounded" width="40%" height={30} sx={{ bgcolor: 'grey.800' }} />
                    </Stack>
                  </Box>
                )}
                <video 
                  src={alibanat} 
                  autoPlay 
                  controls 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </Box>
            </Modal>

            {/* Upcoming Speaker Section Title */}
            <h2 className='text-sm md:text-base font-medium tracking-wide text-gray-200 mb-6'>
              Upcoming Speaker Reveal - Don't Miss Out
            </h2>
          </div>
              
          {/* Countdown Component */}
          <Flex className='justify-center pb-4'>
            <CountDown/>
          </Flex>
        </Container>
      </div>
    </>
  )
}

export default Banner