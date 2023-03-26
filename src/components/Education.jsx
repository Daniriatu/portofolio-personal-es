import { Carousel, Row, Col } from "react-bootstrap";
import upv from "../assets/img/upv.png";
export const Education = ({ date, logo, career }) => {
  const educations = [
    {
      date: "09/22 - Current",
      logo: upv,
      career: "Máster en Tecnologías Interactivas y Fabricación Digital",
    },
    {
      date: "10/2019 - Current",
      logo: upv,
      career:
        "Programa de Doctorado en Lenguas, Literaturas y Culturas, y sus Aplicaciones",
    },
    {
      date: "09/2018 - 09/2019",
      logo: upv,
      career: "Máster en Lenguas y Tecnología",
    },
  ];

  return (
    <Carousel indicators={false} className="education-slider">
      {educations.map((item, index) => {
        return (
          <Carousel.Item key={index}>
            <Row className="justify-content-center align-items-center">
              <Col sm={5}>
                <img
                  className="d-block"
                  src={item.logo}
                  alt="First slide"
                  style={{ margin: "auto" }}
                />
              </Col>
              <Col sm={6}>
                <span>[ {item.date} ]</span>
                <br />
                <span>{item.career}</span>
              </Col>
            </Row>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
