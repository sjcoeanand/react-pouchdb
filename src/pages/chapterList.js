import React from 'react';
import NodeList from '../components/NodeList'
import {Container} from 'reactstrap';

export default class IndexPage extends React.Component {
    render () {
        return(
            <Container className="chapter_list">
                <h1>Chapter List</h1>
                <NodeList chapters={this.props.chapters} />
            </Container>
        );
    }
}