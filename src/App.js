import { apiCalls } from './utilities/apiCalls';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import { Header } from './Components/Header';
import { ArticleContainer } from './Components/ArticleContainer';

const App = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    apiCalls.homePageLoad()
    .then(data => setArticles(data.results))
  }, [])

  return (
    <div className="App">
      <Header />
      <ArticleContainer articles={articles} />
    </div>
  );
}

export default App;
