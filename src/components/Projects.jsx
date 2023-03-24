import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { Education } from "./Education";
import { Language } from "./Language";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/rickandmorty.png";
import projImg2 from "../assets/img/pokemon.png";
import projImg3 from "../assets/img/blog.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      link: "https://github.com/Daniriatu/RickAndMorty.git",
      title: "Rick And Morty",
      description: "A website about characters in the show",
      imgUrl: projImg1,
    },
    {
      link: "https://github.com/Daniriatu/PokemonGame.git",
      title: "Guess Pokemon Game",
      description: "Come and see how much pokemons you know",
      imgUrl: projImg2,
    },
    {
      link: "https://github.com/Daniriatu/Small-Blog.git",
      title: "Personal Blog",
      description: "A blog system made with Vue and Express",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>About Me</h2>
                  <p>
                    Want to get more information and know me better? Stay here
                    and make some clicks, maybe you can find something
                    interesting.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Works</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Education</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Languages</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Education />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Language />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="/" />
    </section>
  );
};
