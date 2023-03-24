import { Carousel, Row, Col } from "react-bootstrap";
import spanish from "../assets/img/spanish.svg";
import english from "../assets/img/english.svg";
import chinese from "../assets/img/chinese.svg";

export const Language = () => {
  const languages = [spanish, english, chinese];
  return (
    <Carousel indicators={false} controls={false} className="language-slider">
      <Carousel.Item>
        <Row>
          {languages.map((item, index) => {
            return (
              <Col sm={4} key={index}>
                <img
                  className="d-block"
                  src={item}
                  alt="First slide"
                  style={{ margin: "auto" }}
                />
              </Col>
            );
          })}
        </Row>
      </Carousel.Item>
    </Carousel>
  );
};
