import React from 'react'

const HeadinCustom = ({headings,headingtext} ) => {
  return (
    <div>
      <div className='w-[105px] mx-auto'>
              <img src={headings} alt="" />
           </div>
           <h1 className='text-[48px] leading-[52px] font-bold text-black text-center align-middle'>{headingtext}
       </h1>
    </div>
  )
}

export default HeadinCustom
