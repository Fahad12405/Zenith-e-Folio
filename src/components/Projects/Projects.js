import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import RealState from "../../Assets/Projects/RealState.png";
import GitFinder from "../../Assets/Projects/GitFinder.png";
import WeatherApp from "../../Assets/Projects/WeatherApp.png";
import TodoApp from "../../Assets/Projects/TodoApp.png";
import FoodPanda from "../../Assets/Projects/Foodpanda.png";

import QuizApp from "../../Assets/Projects/QuizApp.png";



import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
        Check out my latest   <strong className="Fluorescent-Blue">endeavors! </strong>
        </h1>
        <p>Below are some captivating projects I've recently poured my energy into.</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={WeatherApp}
              title="Weather App"
              description=" Sleek Weather App built with HTML, CSS, and JavaScript, leveraging API for live data. Stay ahead of the weather curve with real-time updates and a user-friendly interface. From sunshine to storms, it's your go-to for accurate forecasts"
              ghLink="https://github.com/Fahad12405/Weather-App2"
              demoLink="https://fahad12405.github.io/Weather-App2/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={GitFinder}
              title="Git Finder"
              description="Introducing my GitHub Profile Finder: a sleek, React-powered tool built with HTML, CSS, and Bootstrap. Effortlessly explore GitHub profiles with style and ease. Discover, connect, and explore with simplicity."
              ghLink="https://github.com/Fahad12405/Git-Finder"
              demoLink="https://fahad12405.github.io/Git-Finder/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={RealState}
              title="Real State Website"
              description="Introducing my frontend masterpiece: a Real Estate website crafted with HTML, CSS, and Bootstrap. From property listings to contact pages, every detail is meticulously designed for seamless navigation. Experience the world of real estate in style."
              ghLink="https://github.com/Fahad12405/Real-State-website"
              demoLink="https://fahad12405.github.io/Real-State-website/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={TodoApp}
              title="Todo Tron"
              description="Step into productivity paradise with my latest gem: a dynamic Todo App powered by ReactJS. Seamlessly juggle tasks, conquer deadlines, and reignite your efficiency in style , designed to elevate your productivity to new heights."
              ghLink="https://github.com/Fahad12405/Todo-Tron"
              demoLink="https://todo-tron.netlify.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={FoodPanda}
              title="Foodpanda Clone"
              description=" Prepare your taste buds for a culinary adventure with my latest creation: a stunning FoodPanda clone that brings the entire restaurant experience to your fingertips. Crafted meticulously with HTML, CSS, and Bootstrap, every page exudes visual appeal and functionality, from browsing restaurants to selecting mouthwatering dishes. "
              ghLink="https://github.com/Fahad12405/Foodpanda-Clone"
              demoLink="https://fahad12405.github.io/Foodpanda-Clone/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={QuizApp}
              title="Quiz App"
              description=" Dive into the world of knowledge and fun with my captivating Quiz App, meticulously crafted with HTML, CSS, and JavaScript, enriched with dynamic content fetched through APIs. Embark on an interactive journey of learning and entertainment, where every question brings excitement .  "
              ghLink="https://github.com/Fahad12405/Quiz-App-"
              demoLink="https://fahad12405.github.io/Quiz-App-/"
            />
          </Col>

        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
