import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import IndexPage from './pages/indexPage';
import Navbar from './components/Navbar';
import ShowPage from './pages/ShowPage';
import NewPage from './pages/NewPage';

class App extends React.Component{
  state = {
    chapters : {
      1 : {
        _id : 1,
        title : "chapter 1",
        body : "this is body",
        updatedAt : new Date()
      },
      2 : {
        _id : 2,
        title : "chapter 2",
        body : "this is body",
        updatedAt : new Date()
      },
      3 : {
        _id : 3,
        title : "chapter 3",
        body : "this is body",
        updatedAt : new Date()
      },
      4 : {
        _id : 4,
        title : "chapter 4",
        body : "this is body",
        updatedAt : new Date()
      },
      5 : {
        _id : 5,
        title : "chapter 5",
        body : "this is body",
        updatedAt : new Date()
      }
    }
  }

  handleSave = (chapter) => {
    const ids = Object.keys(this.state.chapters);
    const id = Math.max(...ids) + 1;

    chapter['_id'] = id;
    const {chapters} = this.state;

    this.setState({
      chapters: {
        ...chapters,
        [id] : chapter        
      }
    })

    return id;
  }

  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar /> 
          <Route exact path="/chapters" component={ (props) => <IndexPage {...props} chapters={this.state.chapters}/> }/>
          <Route exact path="/chapters/:id" component={ (props) => <ShowPage {...props} chapters={this.state.chapters[props.match.params.id]}/> }/>
          <Route exact path="/new" component={ (props) => <NewPage {...props} onSave={this.handleSave} />} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
