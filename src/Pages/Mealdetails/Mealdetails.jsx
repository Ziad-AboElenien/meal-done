import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Mealdetails.css';
import { useParams } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer.jsx';

export default function Mealdetails() {

    const [cardData, setCardData] = useState(null);

    const { id } = useParams()
    async function fetchMaealDetails(id) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        let data = await response.json();
        setCardData(data.meals[0]);
    }

    useEffect(() => {
        fetchMaealDetails(id);
    }, [id]);


    const {
        idMeal, strMeal, strCategory, strArea, strInstructions, strMealThumb,
        strYoutube, strSource ,strIngredient1, strIngredient2, strIngredient3, strIngredient4,strIngredient5 ,strIngredient6,stringr7,strIngredient8,strIngredient10,
        strMeasure1, strMeasure2, strMeasure3, strMeasure4,strMeasure5, strMeasure6,strMeasure7,strMeasure8,strMeasure9,strMeasure10
    } = cardData || {};



    return (
        <> <section className="meal-details">

            {!cardData ? (
                <div className="vh-100"><div className="position-absolute translate-middle top-50 start-50"><span className="loader"></span></div></div>
            ) : (
                // Render meal details here when cardData is available
                <div className='container-fluid'>
                    <div class="row meal-details">
                        <div class="item col-lg-4 pe-3">
                            <div class="inner container mt-5">
                                <h3 class="mt-2 h1">{cardData.strMeal}</h3>
                                <img class="meal-poster rounded-4 w-100" src={cardData.strMealThumb} />
                            </div>
                        </div>
                        <div class="item  col-lg-8">
                            <div class="inner bg-m rounded-4 py-5 px-5 container mt-5">
                                <h2 class="h1">Instructions</h2>
                                <p class="fs-5">{strInstructions}</p>
                            </div>
                        </div>
                        <div class="item  col-lg-8">
                            <div class="inner container my-5">
                                <p class="fs-3 fw-bold">Area : <span class="fw-normal">{strArea}</span></p>
                                <p class="fs-3 fw-bold">Category : <span class="fw-normal">{strCategory}</span></p>
                                <p class="fs-3 fw-bold">Recipes : </p>
                                <div class="d-flex flex-wrap gap-2">
                                <p class="fs-5 bg-m w-fit px-3 py-1 rounded-2">{strIngredient1}</p>
                                <p class="fs-5 bg-m w-fit px-3 py-1 rounded-2">{strIngredient2}</p>
                                <p class="fs-5 bg-m w-fit px-3 py-1 rounded-2">{strIngredient3}</p>
                                <p class="fs-5 bg-m w-fit px-3 py-1 rounded-2">{strIngredient4}</p>
                                <p class="fs-5 bg-m w-fit px-3 py-1 rounded-2">{strIngredient5}</p>
                                <p class="fs-5 bg-m w-fit px-3 py-1 rounded-2">{strIngredient6}</p>
                                <p class="fs-5 bg-m w-fit px-3 py-1 rounded-2">{stringr7}</p>
                                <p class="fs-5 bg-m w-fit px-3 py-1 rounded-2">{strIngredient8}</p>
                                <p class="fs-5 bg-m w-fit px-3 py-1 rounded-2">{strIngredient10}</p>
                                </div>
                                <p class="fs-3 fw-bold">Measure : </p>
                                <div class="d-flex flex-wrap gap-2">
                                <p class="fs-5 bg-m w-fit px-3 py-1 rounded-2">{strMeasure1}</p>
                                <p class="fs-5 bg-m w-fit px-3 py-1 rounded-2">{strMeasure2}</p>
                                <p class="fs-5 bg-m w-fit px-3 py-1 rounded-2">{strMeasure3}</p>
                                <p class="fs-5 bg-m w-fit px-3 py-1 rounded-2">{strMeasure4}</p>
                                <p class="fs-5 bg-m w-fit px-3 py-1 rounded-2">{strMeasure5}</p>
                                <p class="fs-5 bg-m w-fit px-3 py-1 rounded-2">{strMeasure6}</p>
                                <p class="fs-5 bg-m w-fit px-3 py-1 rounded-2">{strMeasure7}</p>
                                <p class="fs-5 bg-m w-fit px-3 py-1 rounded-2">{strMeasure8}</p>
                                <p class="fs-5 bg-m w-fit px-3 py-1 rounded-2">{strMeasure9}</p>
                                <p class="fs-5 bg-m w-fit px-3 py-1 rounded-2">{strMeasure10}</p>
                                </div>
                                <p class="fs-3 fw-bold">Tags :</p>
                                <button class="btn btn-success me-2 px-4 py-2 text-white fs-5"><a class='you-link' target="_blank" href={strSource}>Source</a></button>
                                <button class="btn btn-danger px-4 py-2 text-white fs-5"><a class='you-link' target="_blank" href={strYoutube}>Youtube</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
        <Footer />
        </>
    )
}