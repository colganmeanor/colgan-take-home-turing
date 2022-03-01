import '../Styles/ArticleCard.css';

export const ArticleCard = () => {

    return (
        <div className="article-card">
            <div className="article-date">
                <p>March 1st, 2022</p>
            </div>
            <div className="article-content">
                <h2 className="article-headline">Headline</h2>
                <p className="article-abstract">Lorem Ipsum blah blah blah</p>
            </div>
            <div className="article-img-preview">
                <p>this will be the image</p>
            </div>
        </div>
    )

}