import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
import { useState, useEffect } from "react";

function ExamplesNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [items, setItems] = useState([]);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("user"));
    if (items) {
      setItems(items);
      setLogin(true);
    }
  }, []);

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar
        className={"fixed-top " + navbarColor}
        color={props.color || "white"}
        expand="lg"
      >
        <Container>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9b8m5D55-KN1HFVMn2OOzhVxpz7_Cu67p7iJqUzB16elAmDgw982vyD-QzfJydjxbqdI&usqp=CAU"
            width="50px"
            height="50px"
          />
          {/* <UncontrolledDropdown className="button-dropdown">
            <DropdownToggle
              caret
              data-toggle="dropdown"
              href="#pablo"
              id="navbarDropdown"
              tag="a"
              onClick={(e) => e.preventDefault()}
            >
              <span className="button-bar"></span>
              <span className="button-bar"></span>
              <span className="button-bar"></span>
            </DropdownToggle>
            <DropdownMenu aria-labelledby="navbarDropdown">
              <DropdownItem header tag="a">
                Dropdown header
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Another action
              </DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Something else here
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                Separated link
              </DropdownItem>
              <DropdownItem divider></DropdownItem>
              <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                One more separated link
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
          <div className="navbar-translate">
            <NavbarBrand
              href="https://demos.creative-tim.com/now-ui-kit-react/index?ref=nukr-examples-navbar"
              target="_blank"
              id="navbar-brand"
            >
              <b style={{ fontSize: "1.25em" }}>
                <NavLink to="/index" tag={Link}>
                  ONE'22
                </NavLink>
              </b>
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              Designed & Coded by team STRAWHATS
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
              {/* Events */}
              <NavItem>
                <NavLink to="/events" tag={Link}>
                  <b style={{ fontSize: "1.25em" }}>Events</b>
                </NavLink>
              </NavItem>
              {/* Volunteer */}
              <NavItem>
                <NavLink to="/volunteer" tag={Link}>
                  <b style={{ fontSize: "1.25em" }}>Volunteer</b>
                </NavLink>
              </NavItem>
              {/* Team */}
              <NavItem>
                <NavLink to="/team" tag={Link}>
                  <b style={{ fontSize: "1.25em" }}>TEAM</b>
                </NavLink>
              </NavItem>
              {/* Rulebook */}
              <NavItem>
                <NavLink
                  target="_blank"
                  href="https://docs.google.com/document/d/1m_Psv3RJBX-bDuzJc2CCAK5L4uLUOOAMmNGuIgH6D98/edit?usp=sharing"
                >
                  <b style={{ fontSize: "1.25em" }}>Rulebook</b>
                </NavLink>
              </NavItem>
              {/* LOGIN */}
              {!login ? (
                <NavItem>
                  <NavLink to="/login-page" tag={Link}>
                    <b style={{ fontSize: "1.25em" }}>LOGIN</b>
                  </NavLink>
                </NavItem>
              ) : (
                <>
                  <NavItem>
                    <NavLink to="/profile-page" tag={Link}>
                      <b style={{ fontSize: "1.25em" }}>PROFILE</b>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink to="/index" tag={Link}>
                      <b
                        onClick={() => {
                          window.localStorage.clear();
                          setLogin(false);
                        }}
                        style={{ fontSize: "1.25em" }}
                      >
                        LOGOUT
                      </b>
                    </NavLink>
                  </NavItem>
                </>
              )}
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/klsgit_studentcouncil/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ExamplesNavbar;
