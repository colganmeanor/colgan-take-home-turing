import '../Styles/ArticleContainer.css';
import { ArticleCard } from "./ArticleCard"

export const ArticleContainer = ({ articles }) => {

    const articleCards = articles.map((article) => {
        return <ArticleCard article={article} />
    })

    return (
        <div className="article-container">
            {articleCards}
        </div>
    )

}