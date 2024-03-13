import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Collapse,
  NavbarToggler,
} from "reactstrap";

const DoubleNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Brand</NavbarBrand>
        a
        <NavbarToggler onClick={toggle} />s
        <Collapse isOpen={isOpen}>
          k
          <div className="ml-auto">
            <div className="d-flex justify-content-between align-items-center">
              <div> a</div>
            </div>
          </div>
        </Collapse>
      </Navbar>

      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Brand</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Component 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Component 2
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Component 3</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <div className="d-md-none">
        <Navbar color="light" light>
          <Nav vertical>
            <NavItem>
              <NavLink href="/components/">Component 1</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                Component 2
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Component 3</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    </div>
  );
};

export default DoubleNavbar;
