import { Link } from 'react-router-dom'
import './Cardcat.css'

export default function Cardcat({categoryInfo}) {
    const desc = categoryInfo?.strCategoryDescription || ''
    const truncatedDesc = desc.length > 120 ? desc.substring(0, 120) + '...' : desc

    return (
        <div id={categoryInfo.idCategory} className="category-card">
            <Link 
                to={`/category/${categoryInfo.strCategory}`}
                className="card-link"
                aria-label={`View ${categoryInfo.strCategory} meals`}
            >
                <div className="card-inner">
                    {/* Image Section */}
                    <div className="card-image-wrapper">
                        <img
                            className="card-image"
                            src={categoryInfo.strCategoryThumb}
                            alt={categoryInfo.strCategory}
                        />
                        <div className="image-overlay"></div>
                    </div>

                    {/* Content Section */}
                    <div className="card-content">
                        <div className="card-header">
                            <h3 className="card-title">{categoryInfo.strCategory}</h3>
    
                        </div>
                        
                        <p className="card-description">{truncatedDesc}</p>
                        
                        <div className="card-action">
                            <span className="action-text">Explore Meals</span>
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