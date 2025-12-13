import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cardmeal from "../../components/Cardmeal/Cardmeal";

export default function Ingradiant() {

    const { name } = useParams();

    const [data, setData] = useState(null)

    async function getIngradiantMeals(name) {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
        let response = await res.json();
        setData(response.meals)
    }

    useEffect(() => {
        getIngradiantMeals(name)
    }, [])


    return (


        <>
            <section className="Ingradiant-meals">
                <div className="container">
                    {data ? (
                        <div className="row gy-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-1 food-con mt-5">
                            {data.map(meal => (
                                <Cardmeal mealInfo={meal} key={meal.idMeal} />
                            ))}
                        </div>
                    ) : (
                        <div className="vh-100"><div className="position-absolute translate-middle top-50 start-50"><span className="loader"></span></div></div>
                    )}
                </div>
            </section>
        </>
    )
}