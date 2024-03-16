import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
          Hey there, I'm <span className="primary-header">Fahad Alam</span> proudly representing Karachi, Sindh, Pakistan. Coding isn't just a profession for me it's a passion. 
            <br />
            <br />
            In addition to coding, Beyond the screen, I find joy in 
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Diving into the pages of books,

            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Kicking a football around on the field,

            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Immersing myself in virtual worlds through games, 

            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Exploring the wonders of our world through travel.

            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
