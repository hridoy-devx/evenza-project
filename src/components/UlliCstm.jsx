import React from 'react'

const UlliCstm = () => {

  const handleScrollTohome = () =>{
    const homescrill = document.getElementById('home')
    if (homescrill) {
      homescrill.scrollIntoView({behavior:'instant'})
      
    }
  }


   const handleScrollToAbouts = ()=>{
    const aboutsfootr = document.getElementById('About-us')
    if (aboutsfootr) {
      aboutsfootr.scrollIntoView({behavior:'instant'})
    }
   }

   const handalespeaker = ()=>{
    const speakersscroll = document.getElementById('spekars')
    if (speakersscroll) {
      speakersscroll.scrollIntoView({behavior:'instant'})
    }
   }


   const handaleevents = ()=>{
    const eventscedule = document.getElementById('scdule')
    if (eventscedule) {
      eventscedule.scrollIntoView({behavior:'instant'})
    }
   }






  return (
    <div>

        <div className='flex gap-22.5 items-center'>
      <div className=''>

      <div className='text-[22px] text-white leading-7 font-semibold'>Quick Links</div>

        <div>
            <div className='mt-4.5 text-[16px] leading-6 font-normal text-white'>
                <h1 onClick={ handleScrollTohome} className='mt-4.50 hover:text-primary'>Home</h1>
                <h2 onClick={handleScrollToAbouts} className='hover:text-primary'>About Us</h2>
                <h3 onClick={handalespeaker} className='mt-4.50 hover:text-primary'>Speakers</h3>
                <h4 onClick={handaleevents} className='hover:text-primary'>Events</h4>
                <h5  className=''>Contact Us</h5>
            </div>
        </div>
        
      </div>

      <div className=''>
      <div className='text-[22px] text-white leading-7 font-semibold'>Schedules</div>
       <div>
            <ul className='mt-4.5 text-[16px] leading-6 font-normal text-white'>
                <li className='mt-4.50'>Event Management</li>
                <li className='mt-4.50'>Live Streaming</li>
                <li className='mt-4.50'>Virtual Event Setup</li>
                <li className='mt-4.50'>Keynote Sessions</li>
                <li className='mt-4.50'>Networking Programs</li>
            </ul>
        </div>

      </div>
        <div className=''>
        <div className='text-[22px] text-white leading-7 font-semibold mt-1'>Get In Touch</div>

         <div>
            <ul className='mt-4.5 text-[16px] leading-6 font-normal text-white'>
            
                <li className='mt-4.50'>+00 123 456 789</li>
                <li className='mt-4.50'>support@domainname.com</li>
                
                  <h1 className='w-71.75 h-px bg-[#FFFFFF1A] border mt-6'></h1>
                <li className='mt-6 w-[248px] text-[16px] leading-6 '>45/2 Central Business Innovation
Near International Trade Tower</li>
            </ul>
        </div>
      </div>

        </div>
      
    </div>
  )
}

export default UlliCstm
