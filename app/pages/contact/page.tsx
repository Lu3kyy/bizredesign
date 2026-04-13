import ContactContent from '@/components/ContactContent'
import React from 'react'

const page = () => {
    return (
        <div>

            <div className='min-h-60 bg-[linear-gradient(180deg,#5d1328_0%,#370a18_100%)]'>
                <h1 className='pt-15 text-center font-heading text-7xl font-semibold tracking-tight text-white md:text-8xl'>Get In Touch</h1>
            </div>
            <ContactContent />
        

        </div>
    )
}

export default page