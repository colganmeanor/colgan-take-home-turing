import '../Styles/ArticleContainer.css';
import { ArticleCard } from "./ArticleCard"

export const ArticleContainer = ({ articles, setArticle }) => {

    const articleCards = articles && articles.map((article) => {
        if (article.title)
        return <ArticleCard article={article} setArticle={setArticle} />
    }) 

    return (
        <div className="article-container">
            {articles ? articleCards : <p>No Articles Available for This Category Currently</p>}
        </div>
    )

}