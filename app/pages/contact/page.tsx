import React from 'react'

const page = () => {
  return (
    <div>

    <div className='min-h-60 mt-2 bg-[#7a1f2a]'>
        <h1 className='pt-15 text-center text-8xl font-bold'>Get In Touch</h1>
    </div>

    <div className='bg-white grid grid-cols-2 min-h-[60vh] place-items-center'>
        <div>
            <h2 className='text-[#7A1F2A] text-3xl'>Send us a message</h2>
            {/* Add input fields here! */}
        </div>
        <div>
            <h2>Location</h2>
        </div>
    </div>

    </div>
  )
}

export default page