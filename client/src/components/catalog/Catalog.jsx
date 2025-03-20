import React from 'react';


export default function Catalog() {
    return (
        <div className="catalog-container">

                <div  className="catalog-section">
                    <h2>Name of section</h2>
                    <div className="articles-container">

                            <div  className="article-item">
                                <img src='#' className="article-image" />
                                <h3>Article name</h3>
                                <button className="details-button">Details</button>
                                <button className="details-button">Add to Cart</button>

                            </div>
                    </div>
                </div>
        </div>
    );
}