import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import IndexPage from './pages/indexPage';
import Navbar from './components/Navbar';
import WelcomePage from './pages/welcomePage';
import ShowChapter from './pages/ShowChapter';
import ShowSections from './pages/ShowSections';
import NewPage from './pages/NewChapter';
import DB from './db';

class App extends React.Component{
  
  state = {
    db : new DB(),
    chapters : {},
    loading : true
  }

  async componentWillMount () {

    const chapters = await this.state.db.getAllChapters();
    this.setState({
      chapters
    })

    console.log("chapters", chapters)
  }

  handleSave = async (chapter) => {

    let {id} = await this.state.db.createChapter(chapter);
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
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/chapters" component={ (props) => <IndexPage {...props} chapters={this.state.chapters}/> }/>
        <Route exact path="/chapters/:id" component={ (props) => <ShowChapter {...props} chapters={this.state.chapters[props.match.params.id]}/> }/>
        <Route exact path="/sections/:chapter_id/:id" component={ (props) => <ShowSections {...props} /> }/>
        <Route exact path="/new" component={ (props) => <NewPage {...props} onSave={this.handleSave} />} />
      </div>
    )
  }

  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {this.renderContent()}
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
