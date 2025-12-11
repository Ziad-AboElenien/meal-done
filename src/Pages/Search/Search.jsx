import Cardmeal from "../../components/Cardmeal/Cardmeal"
import { useEffect, useState } from "react"


export default function Search() {

    const [searchName, setSearchName] = useState('');
    const [searchFirstChar, setSearchFirstChar] = useState('');
    const [meals, setMeals] = useState(null);


    async function getMealsByName(name) {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
        let response = await res.json();
        setMeals(response.meals);
    }


    async function getMealsByFirstChar(char) {
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${char}`);
        let response = await res.json();
        setMeals(response.meals);
    }



    useEffect(() => {

        if (searchFirstChar.trim().length === 1) {
            getMealsByFirstChar(searchFirstChar);
            return;
        }

        if (searchName.trim().length > 0) {
            getMealsByName(searchName);
            return;
        }

        getMealsByName(" ");

    }, [searchName, searchFirstChar]);



    return (
        <>
            <section className="search">

                <div className="container">
                    <div className="row search-inputs row-cols-md-2">

                        <div className="item">
                            <input
                                id="meal-name"
                                className="form-control search-input mt-5"
                                type="text"
                                value={searchName}
                                onChange={(e) => setSearchName(e.target.value)}
                                placeholder="Search By Name"
                            />
                        </div>

                        <div className="item">
                            <input
                                maxLength="1"
                                id="meal-first-name"
                                className="form-control search-input mt-5"
                                type="text"
                                value={searchFirstChar}
                                onChange={(e) => setSearchFirstChar(e.target.value)}
                                placeholder="Search By First Char"
                            />
                        </div>

                    </div>





                    {meals ? (
                        <div className="row gy-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-1 food-con mt-5">
                            {meals.map(meal => (
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
