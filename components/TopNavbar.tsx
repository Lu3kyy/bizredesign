'use client'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'
import { usePathname, useRouter } from 'next/navigation'

const TopNavbar = () => {
  const currentPath = usePathname();
  const { push } = useRouter();

  const handleRedirect = (path: string) => {
    push(path);
  }

  const isActive = (path: string) => {
    console.log(path + " : " + currentPath)
    return currentPath === path;
  }

  return (
    <div>
      <Navbar fluid className='!bg-[#7a1f2a]'>
        <NavbarBrand>
          <img src="/assets/juicy-burger-icon.png" className="ps-15" alt="Flowbite React Logo" />

        </NavbarBrand>
        <NavbarToggle />
        <NavbarCollapse>
          <NavbarLink className={isActive('/') ? "active me-5" : "me-5 "} onClick={() => handleRedirect("/")}>HOME</NavbarLink>
          <NavbarLink className={isActive("/pages/menu") ? "active me-5" : "me-5 "} onClick={() => handleRedirect("/pages/menu")} >MENU</NavbarLink>
          <NavbarLink className={isActive("/pages/contact") ? "active me-5" : "me-5 "} onClick={() => handleRedirect("/pages/contact")}>CONTACT</NavbarLink>
        </NavbarCollapse>
      </Navbar>
    </div>
  )
}

export default TopNavbar