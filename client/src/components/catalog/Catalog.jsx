import React from 'react';


export default function Catalog() {
    return (
        <div className="catalog-container">

                <div  className="catalog-section">
                    <h2>Name of section</h2>
                    <div className="articles-container">

                            <div  className="article-item">
                                <img  className="article-image" />
                                <h3>Article name</h3>
                                <button className="details-button">Details</button>
                            </div>
                    </div>
                </div>
        </div>
    );
}