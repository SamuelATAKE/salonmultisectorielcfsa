import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";

export default function DefaultNavbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color="transparent" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <a href="#" rel="noreferrer">
            <NavbarBrand>
              Salon Multisectoriel sur le Capital Féminin
            </NavbarBrand>
          </a>
          <NavbarToggler
            onClick={() => setOpenNavbar(!openNavbar)}
            color="white"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <div className="flex flex-col z-50 lg:flex-row lg:items-center">
              <NavLink href="#" rel="noreferrer" ripple="light">
                <Icon name="description" size="2xl" />
                &nbsp;Présentation
              </NavLink>
              <NavLink href="#" rel="noreferrer" ripple="light">
                <Icon name="apps" size="2xl" />
                &nbsp;Programme
              </NavLink>
              <NavLink href="#" rel="noreferrer" ripple="light">
                <Icon family="font-awesome" name="fab fa-github" size="xl" />
                &nbsp;Offres
              </NavLink>
              <NavLink href="#" rel="noreferrer" ripple="light">
                Nous contacter
              </NavLink>
              <a href="#" rel="noreferrer">
                <Button
                  color="transparent"
                  className="bg-white text-black ml-4"
                  ripple="dark"
                >
                  Participer
                </Button>
              </a>
            </div>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
