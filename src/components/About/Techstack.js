import React from "react";
import { Col, Row } from "react-bootstrap";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import Laravel from "../../Assets/TechIcons/Laravel.svg";
import MySQL from "../../Assets/TechIcons/mysql.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import PostgreSQL from "../../Assets/TechIcons/SQL.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import AWS from "../../Assets/TechIcons/AWS.svg";
import Azure from "../../Assets/TechIcons/Azure.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Kubernetes from "../../Assets/TechIcons/Kubernates.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Gitlab from "../../Assets/TechIcons/Gitlab.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import php from "../../Assets/TechIcons/php.svg";
import canva from "../../Assets/TechIcons/canva.svg";
import figma from "../../Assets/TechIcons/figma.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="NodeJS" />
        <div className="tech-icons-text">NodeJS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" />
        <div className="tech-icons-text">ReactJS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">Typescript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={php} alt="php" />
        <div className="tech-icons-text">PHP</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Laravel} alt="Laravel" />
        <div className="tech-icons-text">Laravel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={MySQL} alt="MySQL" />
        <div className="tech-icons-text">MySQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={PostgreSQL} alt="PostgreSQL" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redis} alt="Redis" />
        <div className="tech-icons-text">Redis</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux} alt="redux" />
        <div className="tech-icons-text">Redux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={AWS} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Azure} alt="Azure" />
        <div className="tech-icons-text">Azure</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Kubernetes} alt="Kubernetes" />
        <div className="tech-icons-text">Kubernetes</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Gitlab} alt="Gitlab" />
        <div className="tech-icons-text">Gitlab</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={canva} alt="Canva" />
        <div className="tech-icons-text">Canva</div>  
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={figma} alt="Figma" />
        <div className="tech-icons-text">Figma</div>  
      </Col>
    </Row>
  );
}

export default Techstack;
