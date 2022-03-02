import '../Styles/ArticleDetail.css';


export const ArticleDetail = ({ article }) => {

    return(
        <div className='article-detail'>
            <div className='article-detail-text'>
                <h2>{article.title}</h2>
                <p>{article.abstract}</p>
            </div>
            <div className='article-img-container'>
                {article.multimedia && <img className='article-detail-img' src={article.multimedia[0].url} />}
                {article.multimedia && <p>{article.multimedia[0].caption}</p>}
            </div>
            <p>{article.byline}</p>
            <p>{article['published_date']}</p>
        </div>
    )

}