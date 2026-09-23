import React, { useState } from 'react'
import Container from './Container'
import faqimg from '../assets/faqs.png'
import CommonFast from './CommonFast'
import Flex from './Flex'
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
import FaqsScnd from './FaqsScnd'

const Faqus = () => {

    const [Show,setShow]=useState(false)

  return (
    <div className='py-25 px-57.75'>
<Container>
        <Flex className='gap-11'>


            <div className='w-[40%]'>
                <img src={faqimg} alt="" />
            </div>

            <div className='w-[60%]'>
             <CommonFast
             fastcmntext='FAQs'
             scomntext='What our customers say about their
experience'
            
             />

              <div className='mt-9 bg-[#F6F6F7] py-5.75 px-6.75 rounded-[20px] w-200'>
                <div onClick={()=>setShow(!Show)} className=' flex justify-between   '>
                    <h1 className='font-semibold text-[18px] '>1. How does the complete event register process actually work? </h1>
                    {
                        Show ?
                        <FaMinusCircle className='text-2xl text-primary' />
                        :<FaPlusCircle className='text-2xl text-primary ' />
                    }
              
                </div>

         

                {
                    Show ?
                    
                <div className='  bg-[#F6F6F7] py-5.75 px-6.25 '>
                    <p>Our event is designed with flexible scheduling, allowing you
                         to move between halls, select sessions thatinterest you most,
                          and customizeyour learning experience throughout the day.</p>
                </div>
                  :null
                }

                </div>


              
                    <FaqsScnd
                    caroseltxt1='2. Where is the main event venue located precisely?'
                    caroseltxt2='Our event is designed with flexible scheduling, allowing you
                         to move between halls, select sessions thatinterest you most,
                          and customizeyour learning experience throughout the day.'
                    />
             
                    <FaqsScnd
                    caroseltxt1='3. Can attendees freely switch between sessions and tracks?'
                    caroseltxt2='Our event is designed with flexible scheduling, allowing you
                         to move between halls, select sessions thatinterest you most,
                          and customizeyour learning experience throughout the day.'
                    />
               
                    <FaqsScnd
                    caroseltxt1='4. Does the event provide virtual participation options online?'
                    caroseltxt2='Our event is designed with flexible scheduling, allowing you
                         to move between halls, select sessions thatinterest you most,
                          and customizeyour learning experience throughout the day.'
                    />

                    
                    <FaqsScnd
                    caroseltxt1='5. Does the event provide virtual participation options online?'
                    caroseltxt2='Our event is designed with flexible scheduling, allowing you
                         to move between halls, select sessions thatinterest you most,
                          and customizeyour learning experience throughout the day.'
                    />
                



            </div>
            
        </Flex>
        </Container>
      
    </div>
  )
}

export default Faqus
