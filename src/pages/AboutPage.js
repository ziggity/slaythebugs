import { Col, Row, Container, Card, CardBody, CardHeader } from "reactstrap";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <Container>
      <Row className="row-content">
        <Col sm="6">
          <h3>Our Mission</h3>
          <p>
             Loremipsum
          </p>
        </Col>
        <Col sm="6">
          <Card>
            <CardHeader className="bg-primary text-white">
              <h3>Facts at a Glance</h3>
            </CardHeader>
            <CardBody>
              <dl className="row">
                <dt className="col-6">Founded</dt>
                <dd className="col-6">February </dd>
                <dt className="col-6"></dt>
            
              </dl>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="bg-light mt-3">
            <CardBody className="blockquote">
              <p>
                {" "}
             
              </p>
              <Footer>
                Muriel Strode,{" "}
                <cite title="Source Title">
                </cite>
              </Footer>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="row-content">
        <Col xs="12">
          <h3>Community Partners</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
