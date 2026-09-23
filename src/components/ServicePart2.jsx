import React from 'react'
import Cards from './Cards'
import share from '../assets/share.png'
import girls from '../assets/girls.png'
import boy from '../assets/boy.png'
import girlsf from '../assets/girlsf.png'
import Flex from './Flex'
import CommonFast from './CommonFast'



const ServicePart2 = () => {
  return (
    <div id='spekars' className='px-25 py-25 bg-white'>
      <container>

       <div>
   <div>

      <CommonFast
      fastcmntext='Our Speakers'
      scomntext='Introducing the expert speakers
 '
      
      />
         </div>


       <div className='mt-21.25 '>
        <Flex className=' justify-between'>


        <Cards
        imgsrcshe={girls}
        mtextf='Sophia Rodrigues'
        mtexts='Global Marketing Director'
        share={share}
        
        />
        <Cards
        imgsrcshe={boy}
        mtextf='Jacob Jones'
        mtexts='Lead AI Research Scientist'
        share={share}
        
        />
        <Cards
        imgsrcshe={girlsf}
        mtextf='Arlene McCoy'
        mtexts='Innovation Strategy Expert'
        share={share}
        
        />
        </Flex>
       </div>

       </div>

      </container>
    </div>
  )
}

export default ServicePart2
