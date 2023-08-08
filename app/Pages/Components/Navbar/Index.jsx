"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Link from "next/link";
import NavbarStyles from "../../../styles/Navbar/Navbar.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "../../../styles/Navbar/Navbar.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import { Button, ButtonGroup, Offcanvas } from "react-bootstrap";
import { Drawer } from "@mui/material";
import ContactUs from "../ContactUs/";
import OurCarrers from "../OurCarrers/";

const Index = () => {
  const [show, setShow] = React.useState(false);
  const router = useRouter();
  const currentPath = router.asPath;

  useEffect(() => {
    var myNav = document.getElementById("mynav");
    window.onscroll = function () {
      if (window.scrollY > 50) {
        myNav.classList.add("navScroll");
      } else {
        myNav.classList.remove("navScroll");
      }
    };
  }, []);

  const [open, setOpen] = React.useState(false);
  const openDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
  };

  const [openCareers, setOpenCareers] = React.useState(false);
  const openCareersDrawer = () => {
    setOpenCareers(true);
  };
  const closeCareersDrawer = () => {
    setOpenCareers(false);
  };

  return (
    <>
      {" "}
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          bg="transparent "
          expand={expand}
          className="mb-3 fixed-top"
          id="mynav"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src="./img/logo.png"
                alt="logo"
                style={{ cursor: "pointer", width: "170px" }}
              />
            </Navbar.Brand>{" "}
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              style={{ boxShadow: "none", border: "none" }}
            >
              <Image
                src="/img/Burger.svg"
                width="30"
                height="30"
                className={NavbarStyles.togglerImg}
                alt="moreIcon"
              />
            </Navbar.Toggle>
            <Navbar.Offcanvas
              className={styles.offCanvas + " ms-5"}
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    src="./img/logo.png"
                    alt="logo"
                    style={{ cursor: "pointer" }}
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="align-items-center">
                <Nav className="m-auto align-items-center">
                  <a
                    href="/"
                    className={`${
                      currentPath == "/"
                        ? NavbarStyles.activeLink
                        : NavbarStyles.navbar_link
                    }`}
                    onClick={() => {
                      setShow(true);
                    }}
                  >
                    Home
                  </a>

                  <a
                    className={`${
                      currentPath == "/AboutUs"
                        ? NavbarStyles.activeLink
                        : NavbarStyles.navbar_link
                    }`}
                    href="/AboutUs"
                    onClick={() => {
                      setShow(true);
                    }}
                  >
                    About Us
                  </a>
                  {console.log(router)}
                  <a
                    className={`${
                      currentPath == "/Services"
                        ? NavbarStyles.activeLink
                        : NavbarStyles.navbar_link
                    }`}
                    href="/Services"
                    onClick={() => {
                      setShow(true);
                    }}
                  >
                    Services
                  </a>

                  {/* <Link
                    className={`${
                      currentPath == "/Pos"
                        ? NavbarStyles.activeLink
                        : NavbarStyles.navbar_link
                    }`}
                    href="/Pos"
                  >
                    Cuebase
                  </Link> */}
                  <a
                    className={`${
                      currentPath == "/Erp"
                        ? NavbarStyles.activeLink
                        : NavbarStyles.navbar_link
                    }`}
                    href="/Erp"
                    onClick={() => {
                      setShow(true);
                    }}
                  >
                    Erp System
                  </a>
                </Nav>
                <Nav className="ms-auto  align-items-center ">
                  <a
                    href="/OurCarrers"
                    className={`${
                      currentPath == ""
                        ? NavbarStyles.activeLink
                        : NavbarStyles.navbar_link
                    }`}
                    onClick={() => {
                      setShow(true);
                    }}
                  >
                    Join Us
                  </a>

                  <a
                    href="/ContactUs"
                    className={"ms-2 " + NavbarStyles.buttonLet}
                    onClick={() => {
                      setShow(true);
                    }}
                  >
                    Let’s Talk
                  </a>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Index;
