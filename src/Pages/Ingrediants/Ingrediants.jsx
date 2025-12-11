import Cardingrad from "../../components/Cardingrad/Cardingrad";
import { useEffect, useState } from "react"


export default function Ingrediants() {

    const [ingrediants, setIngrediants] = useState(null);


    async function getIngrediants() {
        let res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        let response = await res.json();
        setIngrediants(response.meals)
    }

    useEffect(() => {
        getIngrediants()
    }, [])


    return (
        <>
            <section className="ingrediants">
                <div className="container">
                    {ingrediants ? (
                        <div className="row  gy-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-1 food-con mt-5">
                            {ingrediants.map(ingrediant => (
                                <Cardingrad ingrediantInfo={ingrediant} />
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