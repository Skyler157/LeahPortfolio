import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! I’m <span className="purple">Leah Gitau. </span>
            I am a versatile and ambitious <strong className="purple">Software Developer </strong>
            with experience in full-stack development, microservices architecture, 
            and API development.
            <br />
            I specialize in creating scalable, secure, and efficient software solutions,
            from frontend interfaces to backend systems.
            <br />
            Outside of coding, I enjoy engaging in activities that keep me creative 
            and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open-Source Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Hackathons & Tech Meetups
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new programming languages and frameworks
            </li>
            <li className="about-activity">
              <ImPointRight /> Cybersecurity challenges (CTFs & Labs)
            </li>
            <li className="about-activity">
              <ImPointRight /> Tech Blogging
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dedicated to building innovative solutions <br/> that make an impact."
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
