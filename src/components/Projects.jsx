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
      description: "Una página web sobres los personajes en la serie",
      imgUrl: projImg1,
    },
    {
      link: "https://github.com/Daniriatu/PokemonGame.git",
      title: "Guess Pokemon Game",
      description: "Ven y descubrir cuántos pokémons conoces",
      imgUrl: projImg2,
    },
    {
      link: "https://github.com/Daniriatu/Small-Blog.git",
      title: "Personal Blog",
      description: "Un sistema blog construido con Vue y Express",
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
                  <h2>Sobre mí</h2>
                  <p>¿Quieres conocerme mejor? Quédate y haz click aquí.</p>
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
                  <Nav.Link eventKey="first">Proyectos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Educación</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Idiomas</Nav.Link>
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
