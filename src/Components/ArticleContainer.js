import '../Styles/ArticleContainer.css';
import { ArticleCard } from "./ArticleCard"

export const ArticleContainer = ({ articles, setArticle }) => {

    const articleCards = articles && articles.map((article) => {
        return <ArticleCard article={article} setArticle={setArticle} />
    }) 

    return (
        <div className="article-container">
            {articles ? articleCards : <p>No Articles Available for This Category Currently</p>}
        </div>
    )

}