import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I’m a <span className="purple"> Software Engineer</span> who enjoys building reliable, scalable and user-focused applications.
                            I’m driven by curiosity, continuous learning, and the challenge of turning ideas
                            into real-world solutions that actually work.
                            <br />
                            <br />
                            My experience spans backend and frontend development, with a strong focus on building RESTful APIs, distributed systems and modern web interfaces.
                            I work comfortably with
                            <b className="purple">
                                {" "} Node.js, Python, Laravel, and Express </b>
                            and I enjoy crafting clean responsive UIs using  <b className="purple"> React, TypeScript, and Tailwind CSS.</b>

                            <br />
                            <br />
                            I’ve worked with a wide range of databases including MySQL, PostgreSQL, MongoDB, Microsoft SQL Server, and Redis
                            and I have hands-on experience deploying and managing applications on AWS, Azure, and Google Cloud Platform.
                            <br />
                            <br />
                            I’m always eager to learn new technologies, solve meaningful problems
                            and collaborate on projects that make an impact.
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
