import Container from './Container'
import React from 'react'
import CommonFast from './CommonFast'
import PricingCustom from './PricingCustom'
import Flex from './Flex'
import pricinglogo from '../assets/pricinglogo.png'
import pricinglogo3 from '../assets/Premium.png'
import pricinglogo2 from '../assets/standard.png'
const PricingPlan = () => {
  return (
    <div id='pages' className='py-25 px-20 bg-white'>

      <Container>
     <div>

        <div>
            <CommonFast
            
            fastcmntext='Pricing Plan'
            scomntext='Discover our flexible pricing plans
for attendees'
            
            />
        </div>

         <Flex className=' justify-between'>
          <div>
            <PricingCustom
            pricinglogo={pricinglogo}
              pricintxt1='Basic Package'
              pricintxt2='$49'
              className='hover:bg-primary'
              />


             </div> 
               <div>
            <PricingCustom
            pricinglogo={pricinglogo3}
              pricintxt1='Standard Pass'
              pricintxt2='$75'
              className='bg-primary '
              
              />


             </div> 
  <div>
            <PricingCustom
            pricinglogo={pricinglogo2}
              pricintxt1='Premium Pass'
              pricintxt2='$95'
               className='hover:bg-primary  '
              />


             </div> 


       
         </Flex>


     </div>
      </Container>

      
    </div>
  )
}

export default PricingPlan
