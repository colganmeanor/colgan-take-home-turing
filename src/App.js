import { apiCalls } from './utilities/apiCalls';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react'
import { Header } from './Components/Header';
import { ArticleContainer } from './Components/ArticleContainer';

const App = () => {

  useEffect(() => {
    apiCalls.homePageLoad()
    .then(data => console.log(data.results))
  })

  return (
    <div className="App">
      <Header />
      <ArticleContainer />
    </div>
  );
}

export default App;
