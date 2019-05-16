import React from 'react';
import {Row, Col, Card, CardImg, CardText, CardBody, Button } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class NodeList extends React.Component {
    renderChapters(){
        const chapters = Object.values(this.props.chapters);
        const bookImg = require('../books.svg');
        return chapters.map((n, i) => 
        // <Col className="chapter-list" key={i}>
        //     <Link to={`/chapters/${n._id}`}>
        //         {n.chapter_name}
        //     </Link>
        // </Col>
            <Col sm={3} key={i} className="chapter-list">
                <Card>
                    
                    <CardBody>
                    <CardImg variant="top" src={bookImg} />
                        <h2>
                                {n.chapter_name}
                        </h2>
                        <CardText>
                        {n.chapter_body}
                        </CardText>
                        <Link to={`/chapters/${n._id}`}>
                            <Button className="btn">
                                View Section
                            </Button>
                        </Link>
                    </CardBody>
                </Card>
            </Col>
        )
    }
    
    render(){
        return(
            <Row className="main">
                {this.renderChapters()}
            </Row>
        )
    }
}