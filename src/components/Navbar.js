import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Container>
                <Link className="navbar-brand" to="/">Companies Act</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/chapters">Chapters</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <Link to="/new" className="btn btn-outline-primary my-2 my-sm-0">Add Chapter</Link>
                    </form>
                </div>
                </Container>
            </nav>
        );
    }
}