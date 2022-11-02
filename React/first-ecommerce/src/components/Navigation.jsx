import { Button, DarkThemeToggle, Navbar } from "flowbite-react";
import React from "react";
import Logo from "../assets/logo.png";

function Navigation() {
  return (
    <Navbar fluid={true} rounded={true} className="mb-3">
      <Navbar.Brand href="/">
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="E-Commerce Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-black">
          E-Commerce
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/catalog">Catalogo</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
