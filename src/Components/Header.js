import React, { useEffect, useState } from "react"
import { headerCategories } from "../utilities/headerCategories";
import { apiCalls } from "../utilities/apiCalls";
import '../Styles/Header.css';
import { useNavigate } from "react-router-dom";

export const Header = ({ setArticles }) => {

    const navigate = useNavigate()
    const [currentDate, setCurrentDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => setCurrentDate(new Date()), 86400000)
    }, [])

    const updateCategory = (cat) => {
        apiCalls.sectionLoad(cat)
        .then(data => setArticles(data.results))
        navigate('/')
    }

    const headerLinks = headerCategories.map((category) => {
        return <p className="article-category-link" data-cy='article-category-link' onClick={() => updateCategory(category.value)}>{category.display}</p>
    })

    return (
        <div data-cy='header' className="header">
            <div className="header-top-container">
                <div className="header-date">
                    <p data-cy='header-date'>{currentDate.toDateString()}</p>
                </div>
                <h1 data-cy='app-title'>The Colgan Times</h1>
                <div data-cy='header-button-section' className="header-buttons">
                    <button data-cy='log-in-button'>Log In</button>
                    <button data-cy='subscribe-button'>Subscribe</button>
                </div>
            </div>
            <div className="header-category-links">
                {headerLinks}
            </div>
        </div>
    )

}