
import { Link } from 'react-router-dom'
import './Cardmeal.css'

export default function Cardmeal({ mealInfo }) {
    const name = mealInfo?.strMeal || 'Meal'
    const img = mealInfo?.strMealThumb || ''

    return (
        <div id={mealInfo.idMeal} className="meal-card">
            <Link 
                to={`/meal/${encodeURIComponent(mealInfo.idMeal)}`}
                className="card-link"
                aria-label={`View ${name} details`}
            >
                <div className="card-inner">
                    {/* Image Section */}
                    <div className="card-image-wrapper">
                        <img
                            className="card-image"
                            src={img}
                            alt={name}
                        />
                        <div className="image-overlay"></div>
                    </div>

                    {/* Content Section */}
                    <div className="card-content">
                        <h3 className="card-title">{name}</h3>
                        
                        <div className="card-action">
                            <span className="action-text">View Details</span>
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

