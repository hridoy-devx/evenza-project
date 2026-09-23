import React from 'react'
import Container from './Container'
import CommonFast from './CommonFast'
import border1 from '../assets/Border.png'
import border2 from '../assets/Borders.png'
import border3 from '../assets/Bordert.png'
import Flex from './Flex'
import TestimnialCstm from './TestimnialCstm'
import TextinialCstm2 from './TextinialCstm2'




const Testimonial = () => {

  
     
  return (
    <div className=' bg-[url(./assets/corebg.png)] bg-center bg-cover bg-no-repeat px-55.25 py-25 '>

        <Container>
            <div>

             <div>
                <CommonFast
                fastcmntext='Testimonials'
                scomntext='What our customers say about theirexperience'
                
                />
             </div>

             <div className='mt-18.75 flex justify-between  gap-5.25'>

                <div className='w-86.5 h-105 hover:scale-95 transition hover:bg-[#FFFFFF1A] bg-primary p-10 pr-18.75 rounded-[20px]'>
                    <Flex>
                        <div>
                            <img src={border1} alt="" />
                        </div>
                          <div>
                            <img src={border2} alt="" />
                        </div>
                          <div>
                            <img src={border3} alt="" />
                        </div>
                          <div>
                            <img src={border1} alt="" />
                        </div>
                    </Flex>

                    <h1 className='text-[16px] font-normal leading-6.25 text-white mt-4.50'>Over 15,000+ Attendees
Connected Worldwide</h1>
                   <h2 className='text-[20px] leading-5.5 mt-[98px] font-bold text-white'>Client Experience Speak
For Themselves</h2>
                   <button  className='py-3.5 px-6 hover:bg-orange-400 bg-white text-primary text-[16px] font-medium mt-14 rounded-[100px]'>View All Reviews</button>
                </div>
                   


                 
                 <TestimnialCstm
                 imgsrct={border2}
                 txt1='"Truly outstanding service! The team exceeded our
expectations with their professionalism, creativity,
and quick turnaround time. Highly recommended for
anyone seeking quality and reliability."'
                 txt2='Ralph Edwards'
                 txt3='Global Marketing Director'
                 
                 />
                <TestimnialCstm
                 imgsrct={border1}
                 txt1='"Truly outstanding service! The team exceeded our
expectations with their professionalism, creativity,
and quick turnaround time. Highly recommended for
anyone seeking quality and reliability."'
                 txt2='Rahul Pandit'
                 txt3='Global Marketing Director'
                 
                 />
              
             </div>


             <div className='flex justify-between mt-27.5 gap-[35px] items-center'>
              <h3 className='w-121.25 h-px bg-[#FFFFFF1A]'></h3>
              <h1 className='text-[20px] leading-[22px] font-semibold text-white'>Supported by Brands That Inspire Innovation</h1>
              <h2 className='w-121.5 h-px bg-[#FFFFFF1A]'></h2>
             </div>

              <div className='mt-15 flex justify-between items-center'>
                <TextinialCstm2 
                fasttxt='Logoipsum'
                />

                   <TextinialCstm2 
                fasttxt='Logoipsum'
                />
                  <TextinialCstm2 
                fasttxt='Logoipsum'
                />
                  <TextinialCstm2 
                fasttxt='Logoipsum'
                />
                  <TextinialCstm2 
                fasttxt='Logoipsum'
                />


              </div>


            </div>

        </Container>
      
    </div>
  )
}

export default Testimonial
