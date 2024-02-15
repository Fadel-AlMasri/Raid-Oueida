import React from 'react';
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';
const Navbar = () => {
  return (
    <div>
      <NextUINavbar>
        <NavbarBrand>{/* LOGO */}</NavbarBrand>
        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <NavbarItem isActive>
            <p>Customers</p>
          </NavbarItem>
          <NavbarItem>
            <p>Integrations</p>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem className='hidden lg:flex'>
            <p>Login</p>
          </NavbarItem>
        </NavbarContent>
      </NextUINavbar>
    </div>
  );
};

export default Navbar;
