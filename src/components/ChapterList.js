import React from 'react';
import {Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';

export default class ChapterList extends React.Component {
    renderChaptersList(){
        const chapters = Object.values(this.props.chapters);
        return chapters.map((n, i) => <Col className="chapter-list" key={i}><Link to={`/chapters/${n._id}`}>{n.section_name}</Link></Col>)
    }
    
    render(){
        return(
            <Row className="main">
                {this.renderChaptersList()}
            </Row>
        )
    }
}