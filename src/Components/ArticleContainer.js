import '../Styles/ArticleContainer.css';
import { ArticleCard } from "./ArticleCard"

export const ArticleContainer = () => {

    return (
        <div className="article-container">
            <ArticleCard />
            <ArticleCard />
        </div>
    )

}