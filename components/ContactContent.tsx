import Image from 'next/image'
import { Button, Label } from 'flowbite-react'
import React from 'react'

const fieldClassName = 'border-[#7A1F2A]! border-3 rounded-sm h-10 w-[18rem] sm:w-95'
const fieldLabelClassName = 'text-[#7A1F2A]! font-semibold text-lg'
const fieldHeadingClassName = 'text-[#7A1F2A]! text-3xl sm:text-4xl font-extrabold pb-3'

const ContactContent = () => {
    return (
        <div className='bg-white grid grid-cols-1 md:grid-cols-2 min-h-[60vh] pb-20'>
            <div className='flex flex-col justify-center items-center'>
                <div>

                    <h2 className='text-[#7A1F2A] text-4xl font-extrabold py-15 px-4'>Send us a message</h2>
                    <div className="flex max-w-[20rem] sm:max-w-md flex-col px-4 sm:px-0 gap-4 justify-center text-[#7A1F2A] ">
                        <div>
                            <div className="mb-2 block">
                                <Label className={fieldLabelClassName} htmlFor="Name">Name:</Label>
                            </div>
                            <input className={fieldClassName} id="Name" type="text" />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label className={fieldLabelClassName} htmlFor="base">Base input</Label>
                            </div>
                            <input className={fieldClassName} id="base" type="text" />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label className={fieldLabelClassName} htmlFor="phone">Phone #:</Label>
                            </div>
                            <input className={fieldClassName} id="phone" type="text" />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label className={fieldLabelClassName} htmlFor="comments">Comments:</Label>
                            </div>
                            <input className='border-[#7A1F2A]! bg-white! border-3 rounded-sm h-50 w-[18rem] sm:w-95' id="comments" type="text" />
                        </div>
                        <Button className='bg-[#7A1F2A]! text-xl'>Send Message</Button>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col items-center pt-15'>
                    <Image src="/assets/map-pin.svg" alt="Map Icon" width={80} height={80} className='h-20 w-20 text-[#7A1F2A]' />
                    <h2 className={fieldHeadingClassName}>LOCATION:</h2>
                    <p className='text-[#7A1F2A] text-xl'>Juicy Burger, 4105 E Main St,</p>
                    <p className='text-[#7A1F2A] text-xl'>Stockton, CA 95215</p>
                </div>
                <div className='flex flex-col items-center pt-15'>
                    <Image src="/assets/Phone.svg" alt="Phone Icon" width={80} height={80} className='h-20 w-20 text-[#7A1F2A]' />
                    <h2 className={fieldHeadingClassName}>CONTACT:</h2>
                    <p className='text-[#7A1F2A] text-xl'>(209) 475-8184,</p>
                    <p className='text-[#7A1F2A] text-xl'>juicyburger24@gmail.com</p>
                </div>
                <div className='flex flex-col items-center pt-15'>
                    <Image src="/assets/Clock.svg" alt="Clock Icon" width={80} height={80} className='h-20 w-20 text-[#7A1F2A]' />
                    <h2 className={fieldHeadingClassName}>BUSINESS HOURS:</h2>
                    <p className='text-[#7A1F2A] text-xl'>Monday - Sunday:</p>
                    <p className='text-[#7A1F2A] text-xl'>10:00 am - 11:00 pm</p>
                </div>
            </div>
        </div>
    )
}

export default ContactContent