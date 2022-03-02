import { useNavigate } from 'react-router-dom';
import '../Styles/ArticleCard.css';

export const ArticleCard = ({ article, setArticle }) => {

    const articleDate = article['published_date'].toString()
    const articleID = article['short_url'].split('ms/')[1]
    const navigate = useNavigate()
    
    const loadArticle = () => {
        setArticle(article)
        navigate(`/article/${articleID}`)
    }

    return (
        <div className="article-card" data-cy='article-card' key={articleID} onClick={() => loadArticle()}>
            <div data-cy='article-date' className="article-date">
                <p>{articleDate}</p>
            </div>
            <div data-cy='article-content' className="article-content">
                <h2 data-cy='article-headline' className="article-headline">{article.title}</h2>
                <p data-cy='article-abstract' className="article-abstract">{article.abstract}</p>
            </div>
            <div data-cy='article-img-container' className="article-img-container">
                {article.multimedia ? <img data-cy='article-img' className='article-img' src={article.multimedia[1].url}/> : <p>No Image</p>}
            </div>
        </div>
    )

}