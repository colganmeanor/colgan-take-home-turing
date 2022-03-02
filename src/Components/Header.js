import React from "react"
import { headerCategories } from "../utilities/headerCategories";
import { apiCalls } from "../utilities/apiCalls";
import '../Styles/Header.css';
import { useNavigate } from "react-router-dom";

export const Header = ({ setArticles }) => {

    const navigate = useNavigate()

    const updateCategory = (cat) => {
        apiCalls.sectionLoad(cat)
        .then(data => setArticles(data.results))
        navigate('/')
    }

    const headerLinks = headerCategories.map((category) => {
        return <p onClick={() => updateCategory(category.value)}>{category.display}</p>
    })

    return (
        <div className="header">
            <div className="header-top-container">
            <p>March 1st, 2022</p>
            <h1>The Colgan Times</h1>
                <div className="header-buttons">
                    <button>Log In</button>
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="header-category-links">
                {headerLinks}
            </div>
        </div>
    )

}