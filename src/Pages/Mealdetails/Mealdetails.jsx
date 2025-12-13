import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mealdetails.css';
import { useParams } from 'react-router-dom';


export default function Mealdetails() {

    const [cardData, setCardData] = useState(null);

    const { id } = useParams();
    
    async function fetchMaealDetails(id) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        let data = await response.json();
        setCardData(data.meals[0]);
    }

    useEffect(() => {
        fetchMaealDetails(id);
    }, [id]);

    // Helper function to get all ingredients and measures
    const getIngredientsAndMeasures = () => {
        if (!cardData) return [];
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = cardData[`strIngredient${i}`];
            const measure = cardData[`strMeasure${i}`];
            if (ingredient && ingredient.trim()) {
                ingredients.push({ ingredient, measure });
            }
        }
        return ingredients;
    };

    const ingredientsAndMeasures = getIngredientsAndMeasures();

    // Convert instructions into a to-do list
    const getInstructionsList = () => {
        if (!cardData || !cardData.strInstructions) return [];
        // Split by periods or newlines and filter out empty items
        return cardData.strInstructions
            .split(/\r?\n|\. /)
            .map(item => item.trim())
            .filter(item => item.length > 10); // Filter out very short items
    };

    const instructionsList = getInstructionsList();

    return (
        <section className="meal-details-section">
            {!cardData ? (
                <div className="vh-100">
                    <div className="position-absolute translate-middle top-50 start-50">
                        <span className="loader"></span>
                    </div>
                </div>
            ) : (
                <div className="meal-details-wrapper">
                    {/* Full Width Poster Image */}
                    <div className="meal-poster-section">
                        <img 
                            src={cardData.strMealThumb} 
                            className="meal-poster-image"
                            alt={cardData.strMeal}
                        />
                        <div className="poster-overlay">
                            <div className="poster-content">
                                <h1 className="meal-title">{cardData.strMeal}</h1>
                                <div className="meal-meta">
                                    <span className="meta-badge area-badge">
                                        <i className="fas fa-map-marker-alt me-2"></i>
                                        {cardData.strArea}
                                    </span>
                                    <span className="meta-badge category-badge">
                                        <i className="fas fa-utensils me-2"></i>
                                        {cardData.strCategory}
                                    </span>
                                </div>
                                {cardData.strTags && (
                                    <div className="meal-tags">
                                        {cardData.strTags.split(',').map((tag, index) => (
                                            <span key={index} className="tag-item">
                                                {tag.trim()}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="container-fluid px-4 py-5">
                        <div className="row g-4">
                            {/* Cooking Instructions as To-Do List */}
                            <div className="col-lg-6">
                                <div className="glass-card instructions-card">
                                    <div className="card-header-custom">
                                        <div className="card-icon">
                                            <i className="fas fa-list-check"></i>
                                        </div>
                                        <h2 className="section-title">Cooking Steps</h2>
                                    </div>
                                    <div className="instructions-checklist">
                                        {instructionsList.map((instruction, index) => (
                                            <div key={index} className="checklist-item">
                                                <div className="checkbox-custom">
                                                    <span className="step-number">{index + 1}</span>
                                                </div>
                                                <p className="instruction-step">{instruction}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Ingredients and Measures */}
                            <div className="col-lg-6">
                                <div className="glass-card ingredients-card">
                                    <div className="card-header-custom">
                                        <div className="card-icon">
                                            <i className="fas fa-pepper-hot"></i>
                                        </div>
                                        <h2 className="section-title">Ingredients & Measurements</h2>
                                    </div>
                                    <div className="ingredients-grid">
                                        {ingredientsAndMeasures.map((item, index) => (
                                            <div key={index} className="ingredient-item">
                                                <div className="ingredient-icon">
                                                    <i className="fas fa-circle"></i>
                                                </div>
                                                <div className="ingredient-details">
                                                    <h4 className="ingredient-name">{item.ingredient}</h4>
                                                    <p className="ingredient-measure">{item.measure}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Links */}
                        <div className="col-12">
                            <div className="glass-card actions-card">
                                <div className="action-buttons">
                                    {cardData.strSource && (
                                        <a 
                                            href={cardData.strSource} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="action-btn source-btn"
                                        >
                                            <div className="btn-content">
                                                <i className="fas fa-external-link-alt"></i>
                                                <span>View Recipe Source</span>
                                            </div>
                                            <div className="btn-shine"></div>
                                        </a>
                                    )}
                                    {cardData.strYoutube && (
                                        <a 
                                            href={cardData.strYoutube} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="action-btn youtube-btn"
                                        >
                                            <div className="btn-content">
                                                <i className="fab fa-youtube"></i>
                                                <span>Watch Video Tutorial</span>
                                            </div>
                                            <div className="btn-shine"></div>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}