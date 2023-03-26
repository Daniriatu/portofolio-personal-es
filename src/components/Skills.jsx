import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/img/html.svg";
import css from "../assets/img/CSS3.svg";
import js from "../assets/img/JavaScript.svg";
import ts from "../assets/img/Typescript.svg";
import node from "../assets/img/nodejs.svg";
import vue from "../assets/img/Vue.svg";
import react from "../assets/img/React Logo.svg";
import unity from "../assets/img/unity.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Conocimientos</h2>
              <p>
                Aquí son las lenguajes y herramientas que domino bien, y voy a
                seguir añadiendo más en esta lista.
              </p>

              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={react} alt="Skill Img" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={vue} alt="Skill Img" />
                  <h5>Vue</h5>
                </div>
                <div className="item">
                  <img src={ts} alt="Skill Img" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src={node} alt="Skill Img" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img src={html} alt="Skill Img" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="Skill Img" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={js} alt="Skill Img" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={unity} alt="Skill Img" />
                  <h5>Unity</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};
