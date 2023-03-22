import { Col, Container, Row } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/github.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="pt-5">
        <Row className="justify-content-center align-item-center">
          <Col sm={6} className="text-center">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/rongji-tu-7bb8aa239/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="" />
              </a>
              <a
                href="https://github.com/Daniriatu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="" />
              </a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
