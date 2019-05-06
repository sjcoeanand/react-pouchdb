import React from 'react';

export default class ShowPage extends React.Component {

    render(){
        const {chapters} = this.props;
        return(
            <div>
                <h1>{chapters.title}</h1>
                <h2>{chapters.body}</h2>
            </div>
        )
    }
}