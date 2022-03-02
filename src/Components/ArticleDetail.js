import '../Styles/ArticleDetail.css';


export const ArticleDetail = ({ article }) => {

    return(
        <div data-cy='article-detail' className='article-detail'>
            <div data-cy='article-detail-text' className='article-detail-text'>
                <h2 data-cy='article-detail-headline'>{article.title}</h2>
                <p data-cy='article-detail-abstract'>{article.abstract}</p>
            </div>
            <div className='article-img-container'>
                {article.multimedia && <img className='article-detail-img' src={article.multimedia[0].url} />}
                {article.multimedia && <p>{article.multimedia[0].caption}</p>}
            </div>
            <p data-cy='article-detail-byline'>{article.byline}</p>
            <p data-cy='article-detail-published-date'>{article['published_date']}</p>
        </div>
    )

}