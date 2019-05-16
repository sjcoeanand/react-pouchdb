import React from 'react';
import { Link } from 'react-router-dom';
import {Container} from 'reactstrap';

export default class NewPage extends React.Component {
    state = {
        chapter : {
            chapter_name : "",
            chapter_body : "",
            createdAt : undefined,
            updatedAt : undefined
        }
    }

    updateValue =(e)=>{
        const {chapter} = this.state;
        this.setState({
            chapter : {...chapter, [e.target.name]: e.target.value}
        })
    }

    handleSave = async (e) => {
        e.preventDefault();

        const _id = await this.props.onSave(this.state.chapter);
        this.props.history.replace(`/chapters/${_id}`)
    }

    render(){
        const {chapter} = this.state;
        return(
            <Container className="add-note">
                <h3>Add new Chapter</h3>
                <form className="col-4" onSubmit={this.handleSave}>
                    <div className="form-group">
                        <label>Chapter title</label>
                        <input type="text" className="form-control" name="chapter_name" value ={chapter.chapter_name} onChange={this.updateValue} />
                    </div>
                    <div className="form-group">
                        <label>Chapter body</label>
                        <textarea type="text" className="form-control" name="chapter_body" value ={chapter.chapter_body} onChange={this.updateValue} />
                    </div>
                    <div className="form-button">
                        <button className="btn btn-primary">Save</button>
                        <Link to="/chapters">cancel</Link>
                    </div>
                </form>
            </Container>
        )
    }
}