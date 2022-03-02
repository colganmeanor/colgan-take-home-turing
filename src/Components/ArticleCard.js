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
        <div className="article-card" key={articleID}>
            <div className="article-date">
                <p>{articleDate}</p>
            </div>
            <div className="article-content">
                <h2 className="article-headline" onClick={() => loadArticle()}>{article.title}</h2>
                <p className="article-abstract">{article.abstract}</p>
            </div>
            <div className="article-img-container">
                <img className='article-img' src={article.multimedia[1].url}/>
            </div>
        </div>
    )

}