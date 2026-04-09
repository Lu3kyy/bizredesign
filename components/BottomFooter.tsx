import React from 'react'

const BottomFooter = () => {
  return (
    <div className='py-5 bg-[#7a1f2a] grid grid-cols-3 place-items-center'>
        <div>
            <h1 className='text-white text-2xl pb-2'>Location</h1>
            <p className='text-gray-300'>1281 Caster brain Drive,</p>
            <p className='text-gray-300'>Suits Ramon Street</p>
            <p className='text-gray-300'>Burger, IN 37933</p>
        </div>
        <div className='items-start mb-5.5'>
            <h1 className='text-white text-2xl pb-2'>Contact</h1>
            <p className='text-gray-300'>(000) 553-0000</p>
            <p className='text-gray-300'>email: juicy@burger.com</p>
            
        </div>
        <div className='items-start mb-5.5'>
            <h1 className='text-white text-2xl pb-2'>Business Hours</h1>
            <p className='text-gray-300'>Operation time - 8-00 pm</p>
            <p className='text-gray-300'>10:00 am - 19:00 pm</p>
        </div>
    </div>
  )
}

export default BottomFooter