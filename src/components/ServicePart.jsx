import React from 'react'
import icon from '../assets/icons.png'
import Card from './Card'
import cfimg from '../assets/cimg.png'
import cimgs from '../assets/cimges.png'
import Flex from './Flex'
import alarm from '../assets/alarm.png'
import items from '../assets/item.png'
import logos from '../assets/logos.png'
import Container from './Container'


const ServicePart = () => {
  return (
    <>
    <div className='bg-[url(./assets/corebg.png)] bg-cover bg-center bg-no-repeat py-25 px-20 '>
        <Container>

<div>

      <div className=' mx-auto w-25 mt-2.5 '>
        <img src={icon} alt="" />
      </div>
      <h1 className='text-white mx-auto space-x-2.5 text-[48px] font-semibold w-160 leading-[52px] align-middle'>Core features that power ourexceptional services</h1>

       <div>
        <Flex className=' justify-between gap-7.20'>
      <Card
      imgsrcf={logos}
      htext='Event Planning Manage'
      ptext='Deliver seamless virtual experience
with high-quality streaming and
interactive tools.'
imgsrcs={cimgs}
     
      />

            <Card
      imgsrcf={alarm}
      htext='Event Planning Manage'
      ptext='Deliver seamless virtual experience
with high-quality streaming and
interactive tools.'
imgsrcs={cimgs}
       className='bg-primary hover:bg-[#FFFFFF1A]'
      />
              <Card
      imgsrcf={logos}
      htext='Event Planning Manage'
      ptext='Deliver seamless virtual experience
with high-quality streaming and
interactive tools.'
imgsrcs={cimgs}
      
      />
              <Card
      imgsrcf={cfimg}
      htext='Event Planning Manage'
      ptext='Deliver seamless virtual experience
with high-quality streaming and
interactive tools.'
imgsrcs={cimgs}
      
      />
          </Flex>
        
       </div>
       <h2 className='text-white text text-[16px] leading-6.25 text-center mt-[62px]'>Join our team and help weave innovation, quality, and success together worldwide.</h2>

          <div className=' mt-5 mx-auto w-100'>
            <Flex className='gap-px'>
            <h1 className='text-white'>4.9/5 </h1>
            <img src={items}alt="" />
            <h2 className='text-white'>Our 4200 Review</h2>
            </Flex>
          </div>


</div>


        </Container>
    </div>
      

    </>
  )
}

export default ServicePart
