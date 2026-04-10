import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'

const ContactContent = () => {
  return (
    <div className='bg-white grid grid-cols-1 md:grid-cols-2 min-h-[60vh] pb-20'>
                <div className='flex flex-col justify-center items-center '>
                    <div>

                        <h2 className='text-[#7A1F2A] text-4xl font-extrabold py-15'>Send us a message</h2>
                        {/* Add input fields here! */}
                        <div className="flex max-w-md flex-col gap-4 text-[#7A1F2A]">
                            <div>
                                <div className="mb-2 block">
                                    <Label className='!text-[#7A1F2A] font-semibold text-lg' htmlFor="Name">Name:</Label>
                                </div>
                                <input className='!border-[#7A1F2A] border-3 rounded-sm h-10 w-95' id="Name" type="text" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label className='!text-[#7A1F2A] font-semibold text-lg' htmlFor="base">Base input</Label>
                                </div>
                                <input className='!border-[#7A1F2A] border-3 rounded-sm h-10 w-95' id="base" type="text" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label className='!text-[#7A1F2A] font-semibold text-lg' htmlFor="base">Phone #:</Label>
                                </div>
                                <input className='!border-[#7A1F2A] border-3 rounded-sm h-10 w-95' id="base" type="text" />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label className='!text-[#7A1F2A] font-semibold text-lg' htmlFor="base">Comments:</Label>
                                </div>
                                <input className='!border-[#7A1F2A] border-3 rounded-sm h-50 w-95 !bg-white' id="base" type="text" />
                            </div>
                            <Button className='!bg-[#7A1F2A] text-xl'>Send Message</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex flex-col items-center pt-15'>
                        <img className='h-20 text-[#7A1F2A]' src="/assets/map-pin.svg" alt="Map Icon" />
                        <h2 className='!text-[#7A1F2A] text-4xl font-extrabold pb-3'>LOCATION:</h2>
                        <p className='text-[#7A1F2A] text-xl'>Juicy Burger, 4105 E Main St,</p>
                        <p className='text-[#7A1F2A] text-xl'>Stockton, CA 95215</p>
                    </div>
                    <div className='flex flex-col items-center pt-15'>
                        <img className='h-20 text-[#7A1F2A]' src="/assets/Phone.svg" alt="Map Icon" />
                        <h2 className='!text-[#7A1F2A] text-4xl font-extrabold pb-3'>CONTACT:</h2>
                        <p className='text-[#7A1F2A] text-xl'>(209) 475-8184,</p>
                        <p className='text-[#7A1F2A] text-xl'>juicyburger24@gmail.com</p>
                    </div>
                    <div className='flex flex-col items-center pt-15'>
                        <img className='h-20 text-[#7A1F2A]' src="/assets/map-pin.svg" alt="Map Icon" />
                        <h2 className='!text-[#7A1F2A] text-4xl font-extrabold pb-3'>BUSINESS HOURS:</h2>
                        <p className='text-[#7A1F2A] text-xl'>Monday - Sunday:</p>
                        <p className='text-[#7A1F2A] text-xl'>10:00 am - 11:00 pm</p>
                    </div>
                </div>
            </div>
  )
}

export default ContactContent