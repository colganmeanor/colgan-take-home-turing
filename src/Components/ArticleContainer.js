import '../Styles/ArticleContainer.css';
import { ArticleCard } from "./ArticleCard"

export const ArticleContainer = ({ articles, setArticle }) => {

    const articleCards = articles.map((article) => {
        const articleID = article['short_url'].split('ms/')[1]
        return <ArticleCard article={article} setArticle={setArticle} key={articleID} />
    })

    return (
        <div className="article-container">
            {articleCards}
        </div>
    )

}