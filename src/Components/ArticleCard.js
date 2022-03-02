import '../Styles/ArticleCard.css';

export const ArticleCard = ({ article, setArticle }) => {

    const articleDate = article['published_date'].toString()
    

    return (
        <div className="article-card">
            <div className="article-date">
                <p>{articleDate}</p>
            </div>
            <div className="article-content">
                <h2 className="article-headline" onClick={() => setArticle(article)}>{article.title}</h2>
                <p className="article-abstract">{article.abstract}</p>
            </div>
            <div className="article-img-container">
                <img className='article-img' src={article.multimedia[1].url}/>
            </div>
        </div>
    )

}