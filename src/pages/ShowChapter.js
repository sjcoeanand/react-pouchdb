import React from 'react';
import {Row, Col, Card, CardImg, CardText, CardBody, Button,Container } from 'reactstrap';
import {Link} from 'react-router-dom';
import { isEmpty } from 'lodash';

export default class ShowChapter extends React.Component {
    render(){
        const bookImg = require('../books.svg');
        const {chapters, match} = this.props;
        const {id} = match.params;
        if(isEmpty(chapters)){
            return null;
        }
        console.log(",,,,,,,,,,,,,", match.params.id)
        const {sections } = chapters;
        return(
          <Container>
            <Row>
                
                {!isEmpty(sections) && 
                    sections.map((item, index) => {
                        console.log("item1", item)
                        return(
                          
                          <Col sm={3} key={index} className="section-list">
                          <Card>
                            
                            <CardBody>
                            <CardImg variant="top" src={bookImg} />
                            <h3>
                                {item.section_name}
                            </h3>
                            <CardText>
                            {item.chapter_body}
                            </CardText>
                            <Link to={`/sections/${id}/${item.section_id}`}>
                                <Button className="btn">
                                    View Details
                                </Button>
                            </Link>
                            </CardBody>
                            </Card>
                          </Col>
                        )
                    })
                }
                
            </Row>
            </Container>
        )
    }
}