import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function About() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Particle />
      <Container fluid className="about-section">
        <Container>
          {/* Intro Row */}
          <Row className="align-items-center justify-content-center" style={{ padding: "40px 0" }}>
            {/* About Text */}
            <Col md={7} className="mb-4">
              <h1 style={{ fontSize: "2.5em", fontWeight: "700", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <AboutCard />
            </Col>

            {/* Profile Image */}
            <Col md={4} className="text-center mb-4">
              <img
                src={laptopImg}
                alt="Leah Gitau"
                className="img-fluid rounded shadow-lg"
                style={{ maxHeight: "350px" }}
              />
            </Col>
          </Row>

          {/* Skillset Section */}
          <h1
            id="skills"
            className="project-heading text-center"
            style={{ marginBottom: "30px" }}>
            Professional <strong className="purple">Skillset</strong>
          </h1>
          <Techstack />


        </Container>
      </Container>
    </>
  );
}

export default About;
