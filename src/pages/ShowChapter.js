import React from 'react';

export default class ShowPage extends React.Component {

    render(){
        const {chapters} = this.props;
        if(!chapters){
            return null;
        }
        return(
            <div>
                <h1>{chapters.section_name}</h1>
                <h2>{chapters.section_body}</h2>
            </div>
        )
    }
}