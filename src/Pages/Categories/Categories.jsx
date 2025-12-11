import Cardcat from "../../components/Cardcat/Cardcat";
import { useEffect, useState } from "react"

export default function Categories() {


    const [categories, setCategories] = useState(null)


    async function getCategories() {
        let res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        let response = await res.json();
        setCategories(response.categories)
    }

    useEffect(() => {
        getCategories()
    }, [])




    return (
        <>
            <section className="categories">
                <div className="container">
                    {categories ? (
                        <div className="row  gy-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-1 food-con mt-5">
                            {categories.map(category => (
                                <Cardcat categoryInfo={category} />
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