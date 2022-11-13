import './App.css';
import Header from './components/header/Header';
import Feed from './components/feed/Feed';
import NewsPage from './components/NewsPage/NewsPage';
import {useEffect} from 'react';
import {api} from './utils/Api';

function App() {

  useEffect(() => {
  api.getLatestNews(100)
    .then(res => console.log(res,' qqqqqq'))
  },[])

  return (
    <div className="App">
      <Header/>
      <Feed>

      </Feed>

      <NewsPage>

      </NewsPage>
    </div>
  );
}

export default App;
