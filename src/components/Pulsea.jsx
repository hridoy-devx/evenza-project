import React from 'react'

const pulseStyle = {
  animation: 'animate-pulse-ring 3s linear infinite',
}

const keyframes = `
  @keyframes animate-pulse-ring {
    0% { box-shadow: 0 0 0 0 rgba(255,109,74,0.7), 0 0 0 0 rgba(255,109,74,0.7); }
    40% { box-shadow: 0 0 0 50px rgba(255,109,74,0.0), 0 0 0 0 rgba(255,109,74,0.7); }
    80% { box-shadow: 0 0 0 50px rgba(255,109,74,0.0), 0 0 0 30px rgba(255,109,74,0); }
    100% { box-shadow: 0 0 0 0 rgba(255,109,74,0.0), 0 0 0 30px rgba(255,109,74,0); }
  } `

const Pulsea = ({ className }) => {
  return (
    <>
      <style>{keyframes}</style>

      <div
        style={{ animation: 'animate-pulse-ring 3s linear infinite' }}
        className={`w-20 h-20 pointer-events-none  rounded-full text-white text-sm 
            text-center leading-25 uppercase cursor-pointer ${className || ''}`}
      >
      </div>
    </>
  )
}

export default Pulsea
