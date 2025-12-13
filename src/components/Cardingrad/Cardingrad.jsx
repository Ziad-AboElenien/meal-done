import { Link } from 'react-router-dom'
import './Cardingrad.css'

export default function Cardingrad({ingrediantInfo}) {
    const desc = ingrediantInfo?.strDescription || ''
    const truncatedDesc = desc.length > 120 ? desc.substring(0, 120) + '...' : desc

    return (
        <div id={ingrediantInfo.idIngredient} className="ingredient-card">
            <Link 
                to={`/ingredient/${encodeURIComponent(ingrediantInfo.strIngredient)}`}
                className="card-link"
                aria-label={`View meals with ${ingrediantInfo.strIngredient}`}
            >
                <div className="card-inner">
                    {/* Image Section */}
                    <div className="card-image-wrapper">
                        <img
                            className="card-image"
                            src={ingrediantInfo.strThumb}
                            alt={ingrediantInfo.strIngredient}
                        />
                        <div className="image-overlay"></div>
                    </div>

                    {/* Content Section */}
                    <div className="card-content">
                        <h3 className="card-title">{ingrediantInfo.strIngredient}</h3>
                        
                        <p className="card-description">{truncatedDesc}</p>
                        
                        <div className="card-action">
                            <span className="action-text">Get Meals</span>
                            <i className="fas fa-arrow-right action-arrow"></i>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="card-shine"></div>
                </div>
            </Link>
        </div>
    )
}