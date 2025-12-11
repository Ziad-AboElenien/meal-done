
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function Cardmeal({ mealInfo }) {




    return (<>
        <div  className="item rounded-3">
            <div className="inner shadow rounded-4 overflow-hidden position-relative">
                <img className="w-100 img-trans rounded-3" src={mealInfo.strMealThumb} alt={mealInfo.strMeal}/>
                <div className="layer position-absolute text-white top-0 bottom-0 start-0 end-0  rounded-3">
                    <div className="trans-left m-5">
                        <h3 className="movie-name fs-2 my-4 text-center">{mealInfo.strMeal}</h3>
                        <div className="text-center"><Link to={`/meal/${mealInfo.idMeal}`} className="text-decoration-none w-fit text-white px-3 py-1 rounded-2 bg-secondary">Details</Link></div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

