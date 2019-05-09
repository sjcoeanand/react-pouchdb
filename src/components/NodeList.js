import React from 'react';
import {Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class NodeList extends React.Component {
    renderChapters(){
        const chapters = Object.values(this.props.chapters);
        return chapters.map((n, i) => 
        // {
        //     console.log("n",n._attachments["images.png"])
        // }
        <Col className="chapter-list" key={i}>
            <Link to={`/chapters/${n._id}`}>{n.section_name}</Link>
            {/* <img src={n._attachments[]} /> */}
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