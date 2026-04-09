import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'
import React from 'react'

const TopNavbar = () => {
  return (
    <div>
        <Navbar fluid rounded className='!bg-[#7a1f2a]'>
                  <NavbarBrand  href="https://flowbite-react.com">
                    <img src="/assets/juicy-burger-icon.png" className="ps-15" alt="Flowbite React Logo" />

                  </NavbarBrand>
                  <NavbarToggle />
                  <NavbarCollapse>
                    <NavbarLink className='pe-5' href="#" active>HOME</NavbarLink>
                    <NavbarLink className='pe-5' href="#">MENU</NavbarLink>
                    <NavbarLink className='pe-5' href="#">CONTACT</NavbarLink>
                  </NavbarCollapse>
                </Navbar>
    </div>
  )
}

export default TopNavbar