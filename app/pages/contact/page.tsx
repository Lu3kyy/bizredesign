import ContactContent from '@/components/ContactContent'
import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'

const page = () => {
    return (
        <div>

            <div className='min-h-60 mt-2 bg-[#7a1f2a]'>
                <h1 className='pt-15 text-center text-8xl font-bold'>Get In Touch</h1>
            </div>
            <ContactContent />
        

        </div>
    )
}

export default page