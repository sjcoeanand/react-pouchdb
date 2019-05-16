import React from 'react';
import { Container, Row, Col, Card, CardImg,  CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class WelcomePage extends React.Component {
  render() {
    const bookImg = require('../books.svg');
    return (
      <Container className="App">
        <h1>Welcome to Homepage</h1>
        <Row>

          <Col sm={3} className="section-list">
            <Card>

              <CardBody>

                <CardImg variant="top" src={bookImg} />
                <Link to={`/chapters/`}>
                  <Button className="btn">
                    Chapters
                    </Button>
                </Link>

              </CardBody>
            </Card></Col>
        </Row>

      </Container>
    );
  }
}