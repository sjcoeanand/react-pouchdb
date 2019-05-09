import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import IndexPage from './pages/indexPage';
import Navbar from './components/Navbar';
import ShowPage from './pages/ShowChapter';
import NewPage from './pages/NewChapter';
import DB from './db';

class App extends React.Component{
  
  state = {
    db : new DB(),
    chapters : {
      // 1 : {
      //   _id : 1,
      //   title : "chapter 1",
      //   body : "this is body",
      //   updatedAt : new Date()
      // },
      // 2 : {
      //   _id : 2,
      //   title : "chapter 2",
      //   body : "this is body",
      //   updatedAt : new Date()
      // }
    },
    loading : true
  }

  // componentWillMount(){
  //   const nano = require('nano')('http://localhost:5984');
  //     nano.db.use('companies_act').get('c161ff0d8cc3773c2847bcff9500143c')
  //       .then((body) => {
  //         console.log(body);
  //       });
  // }

  async componentDidMount () {

    const chapters = await this.state.db.getAllChapters();
    this.setState({
      chapters
    })

    console.log("chapters", chapters)
  }

  handleSave = async (chapter) => {
    // const ids = Object.keys(this.state.chapters);
    // const id = Math.max(...ids) + 1;

    // chapter['_id'] = id;

    let {id} = await this.state.db.createChapter(chapter);
    // let res = await this.state.db.createChapter(chapter);
    // let { id } = res;

    const {chapters} = this.state;

    this.setState({
      chapters: {
        ...chapters,
        [id] : chapter        
      }
    })

    return id;
  }

  renderContent(){
    return(
      <div className="App-content">
        <Route exact path="/chapters" component={ (props) => <IndexPage {...props} chapters={this.state.chapters}/> }/>
        <Route exact path="/chapters/:id" component={ (props) => <ShowPage {...props} chapters={this.state.chapters[props.match.params.id]}/> }/>
        <Route exact path="/new" component={ (props) => <NewPage {...props} onSave={this.handleSave} />} />
      </div>
    )
  }

  render(){
    return(
      
      <BrowserRouter>
        <div className="App">
          <Navbar /> 
          {/* <Route exact path="/chapters" component={ (props) => <IndexPage {...props} chapters={this.state.chapters}/> }/>
          <Route exact path="/chapters/:id" component={ (props) => <ShowPage {...props} chapters={this.state.chapters[props.match.params.id]}/> }/>
          <Route exact path="/new" component={ (props) => <NewPage {...props} onSave={this.handleSave} />} /> */}
          {this.renderContent()}
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
