import React, { useEffect, useState } from 'react'
import Flex from './Flex';
import { countDownDateAndTime } from 'countdown-date-time';


const CountDown = () => {

    const conduct_date = '2027-07-05 12:00:00';
    const [Count, setCount] = useState({})

    useEffect(() => {

        setInterval(() => {
            const countDown = countDownDateAndTime(conduct_date);
            setCount(countDown)
        })

    }, [])

    return (
        <Flex className='gap-7.25 mx-auto mt-10 justify-center'>
            <div className='w-31.25 h-29.75 backdrop-blur-md rounded-[10px] p-5.25 text-center pb-2 bg-[rgba(255, 255, 255, 0.1)] text-white mx-auto items-center'>
                <h1 className='text-[40px] font-bold leading-11'> {Count.days} </h1>
                <h2 className='text-sm font-medium leading-6.25 '>Days</h2>
            </div>

            <div className='w-31.25 h-29.75 backdrop-blur-md rounded-[10px] p-5.25 text-center pb-2 text-white mx-auto items-center'>
                <h1 className='text-[40px] font-bold leading-11'> {Count.hours} </h1>
                <h2 className='text-sm font-medium leading-6.25 '>Hours</h2>
            </div>

            <div className='w-31.25 h-29.75 backdrop-blur-md rounded-[10px] p-5.25 text-center pb-2 text-white mx-auto items-center'>
                <h1 className='text-[40px] font-bold leading-11'> {Count.minutes} </h1>
                <h2 className='text-sm font-medium leading-6.25 '>Minutes</h2>
            </div>

            <div className='w-31.25 h-29.75 backdrop-blur-md rounded-[10px] p-5.25 text-center pb-2 text-white mx-auto items-center'>
                <h1 className='text-[40px] font-bold leading-11'> {Count.seconds} </h1>
                <h2 className='text-sm font-medium leading-6.25 '>seconds</h2>
            </div>

        </Flex>
    )
}

export default CountDown
