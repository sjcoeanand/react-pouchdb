import React from 'react';
import { Link } from 'react-router-dom';

export default class NewPage extends React.Component {
    state = {
        chapter : {
            title : "",
            body : "",
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

    handleSave =(e)=> {
        e.preventDefault();

        const _id = this.props.onSave(this.state.chapter);
        this.props.history.replace(`/chapters/${_id}`)
    }

    render(){
        const {chapter} = this.state;
        return(
            <div className="add-note">
                <h2>New Chapter</h2>
                <form className="col-4" onSubmit={this.handleSave}>
                    <div className="form-group">
                        <label>Chapter title</label>
                        <input type="text" className="form-control" name="title" value ={chapter.title} onChange={this.updateValue} />
                    </div>
                    <div className="form-group">
                        <label>Chapter body</label>
                        <textarea type="text" className="form-control" name="body" value ={chapter.body} onChange={this.updateValue} />
                    </div>
                    <div className="form-button">
                        <button className="btn btn-primary">Save</button>
                        <Link to="/chapters">cancel</Link>
                    </div>
                </form>
            </div>
        )
    }
}