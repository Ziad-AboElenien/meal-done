import Cardarea from "../../components/CardArea/Cardarea";
import { useEffect, useState } from "react"

export default function Area() {


    const [areas, setAreas] = useState(null);


    async function getAreas() {
        let res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
        let response = await res.json();
        setAreas(response.meals)
    }

    useEffect(() => {
        getAreas()
    }, [])

    return (
        <>
            <section className="areas">
                <div className="container">
                    {areas ? (
                        <div className="row  gy-4 row-cols-lg-4 row-cols-md-2 row-cols-sm-1 food-con mt-5">
                            {areas.map(area => (
                                <Cardarea areaInfo={area} />
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