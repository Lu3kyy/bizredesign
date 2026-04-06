import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'
import React from 'react'

const TopNavbar = () => {
  return (
    <div>
        <Navbar fluid rounded>
                  <NavbarBrand  href="https://flowbite-react.com">
                    <img src="/assets/juicy-burger-icon.png" className="mr-3 h-20 w-45" alt="Flowbite React Logo" />

                  </NavbarBrand>
                  <NavbarToggle />
                  <NavbarCollapse>
                    <NavbarLink href="#" active>HOME</NavbarLink>
                    <NavbarLink href="#">MENU</NavbarLink>
                    <NavbarLink href="#">CONTACT</NavbarLink>
                  </NavbarCollapse>
                </Navbar>
    </div>
  )
}

export default TopNavbar