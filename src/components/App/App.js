import './App.css';
import Header from '../Header/Header';
import Feed from '../Feed/Feed';
import StoryPage from '../StoryPage/StoryPage';
import {Route, withRouter} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header/>
      <Route path="/:id" component={withRouter(StoryPage)}>
      </Route>
      <Route exact path="/">
        <Feed/>
      </Route>
    </div>
  );
}

export default App;
