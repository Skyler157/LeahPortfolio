import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineProfile, // added this for Skills
} from "react-icons/ai";
import { FiMoon, FiSun } from "react-icons/fi";

import { CgFileDocument } from "react-icons/cg";

function NavBar({ theme = "dark", onToggleTheme = () => {} }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const isDark = theme === "dark";

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <strong className="main-name"> LEAH GITAU.</strong>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {/* Home */}
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            {/* About */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            {/* Skills */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about#skills"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineProfile style={{ marginBottom: "2px" }} /> Skills
              </Nav.Link>
            </Nav.Item>

            {/* Projects */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
              </Nav.Link>
            </Nav.Item>

            {/* Resume */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="theme-toggle">
              <button
                type="button"
                className="theme-toggle-btn"
                onClick={onToggleTheme}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                title={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDark ? <FiSun /> : <FiMoon />}
              </button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
