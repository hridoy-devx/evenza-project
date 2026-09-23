import React, { useEffect, useState } from 'react'
import logo from '../assets/Link.png'
import Container from './Container'
import Flex from './Flex'
import Btn from './Btn'

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScrollCheck = () => {
      if (window.scrollY > 75) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScrollCheck)
    return () => window.removeEventListener('scroll', handleScrollCheck)
  }, [])

  return (
    <nav className={`text-white backdrop-blur-md px-20 fixed top-0 left-0 w-full z-50 py-6.25 duration-300 ${isScrolled ? "bg-primary shadow-lg" : "bg-slate-900/40 text-gray-200"
      }`}>
      <Container>
        <Flex className='justify-between items-center!'>
          <div>
            <img src={logo} alt="Logo" />
          </div>

          <ul className='flex gap-10 font-medium cursor-pointer'>
            <li onClick={() => handleScroll('home')} className='hover:text-black transition-colors'>Home</li>
            <li onClick={() => handleScroll('About-us')} className='hover:text-black transition-colors'>About Us</li>
            <li onClick={() => handleScroll('scdule')} className='hover:text-black transition-colors'>Schedule</li>
            <li onClick={() => handleScroll('pages')} className='hover:text-black transition-colors'>Pages</li>
            <li onClick={() => handleScroll('contect')} className='hover:text-black transition-colors'>Contact Us</li>
          </ul>

          <Btn className='py-3 px-6 text-sm font-semibold text-gray-900 bg-white rounded-md shadow-md transition-all duration-300 hover:bg-gray-100 hover:scale-105'>
            Join the Conference
          </Btn>
        </Flex>
      </Container>
    </nav>
  )
}

export default NavBar