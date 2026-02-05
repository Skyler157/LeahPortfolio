// Projects.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Images
import Proconnect from "../../Assets/Projects/Proconnect.png";
import EcommerceClothingPlatform from "../../Assets/Projects/EcommerceClothingPlatform.png";
import MonitoringTool from "../../Assets/Projects/MonitoringTool.png";
import QueueSystem from "../../Assets/Projects/QueueSystem.png";
import FreshCart from "../../Assets/Projects/FreshCart.png";
import HospitalManagementSystem from "../../Assets/Projects/HospitalManagementSystem.png";
import SystemDowntimeMonitor from "../../Assets/Projects/SystemDowntimeMonitor.png";

function Projects() {
  const projectData = [
    {
      imgPath: Proconnect,
      title: "Proconnect",
      description:
        "ProConnect is a web-based platform designed to connect service providers and clients across the country, enabling people to access professional services remotely and efficiently. The platform allows service providers—such as drivers, chefs, mechanics, and doctors—to subscribe and list their services, while clients can search, book, and pay for services securely. ProConnect features user authentication, service listings, booking and scheduling, ratings and reviews, and integrated payment solutions using PayPal and M-Pesa. The system is built using the MERN stack (MongoDB with Mongoose, Express, React, and Node.js) to deliver a scalable, secure, and user-friendly experience.",
      ghLink: "https://github.com/Skyler157/proconnect",
    },
    {
      imgPath: EcommerceClothingPlatform,
      title: "Ecommerce Clothing Platform",
      description:
        "TrendyFits is a full-stack e-commerce clothing platform that allows users to browse products, manage a shopping cart, and securely complete purchases online. Built with React, Axios, Node.js, Express, and MongoDB, it integrates PayPal for secure online payments and includes an admin panel for managing products and orders.",
      ghLink: "https://github.com/Skyler157/EcommerceClothingPlatform-TrendyFits",
    },
    {
      imgPath: FreshCart,
      title: "Fresh Cart",
      description:
        "FreshCart is a responsive grocery e-commerce website showcasing fresh, organic products. It features product listings, categories, reviews, blogs, shopping cart, search functionality, and login form, all with modern, interactive UI elements.",
      ghLink: "https://github.com/Skyler157/Grocery-Store-Application",
    },
    {
      imgPath: MonitoringTool,
      title: "Monitoring Tool",
      description:
        "Monitoring Dashboard tracks the health and availability of critical IT resources, performance, user activity, and system logs. It performs scheduled checks on service uptime, SSL validity, database connectivity, and disk usage, generating alerts delivered via Email and SMS. Backend: Node.js + MSSQL + Axios + Nodemailer + Winston. Frontend: React + Tailwind CSS with KPI cards, searchable tables, and charts for real-time monitoring insights.",
      ghLink: "https://github.com/Skyler157/MonitoringDashboard",
    },
    {
      imgPath: QueueSystem,
      title: "Queue Management System",
      description:
        "Service Queue Management System is a React-based application designed to streamline customer service operations across multiple departments. It allows ticket booking, real-time queue monitoring, ticket management by tellers, and detailed reports for completed and skipped tickets. Also includes a self-service booking page for customers.",
      ghLink: "http://github.com/Skyler157/Queueing-System",
    },
    
    {
      imgPath: HospitalManagementSystem,
      title: "Hospital Management System",
      description:
        "A comprehensive, role-based electronic health records platform for hospitals. Integrates medical records, triage, pharmacy, laboratory, billing, appointments, referrals, reporting, and MOH forms. Supports granular access control, advanced search, analytics dashboards, voice-to-text input, offline support, and a patient self-service portal.",
      ghLink: "https://github.com/Skyler157/HospitalManagementSystem",
    },
    {
      imgPath: SystemDowntimeMonitor,
      title: "System Downtime Monitor",
      description:
        "Full-stack monitoring platform for critical IT resources. Detects issues automatically, logs alerts, and notifies administrators via email and SMS. Frontend: React + Tailwind CSS with real-time metrics, charts, and searchable tables. Backend: Node.js handling monitoring, alert management, and integrations with SMS and email APIs.",
      ghLink: "https://github.com/Skyler157/system-downtime-monitor2",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((project, idx) => (
            <Col
              md={4}
              className="project-card d-flex align-items-stretch"
              key={idx}
            >
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;