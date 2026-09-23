import React from 'react'

const Btn = ({ children, className }) => {
  return (
    <div className={` ${className}  py-4 px-6 bg-primary  w-50 rounded-xl  `}>
      {children}
    </div>
  )
}

export default Btn
