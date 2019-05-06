import React from 'react';
import NodeList from '../components/NodeList'

export default class IndexPage extends React.Component {
    render () {
        return(
            <div className="App">
                <h1>Chapter List</h1>
                <NodeList chapters={this.props.chapters} />
            </div>
        );
    }
}