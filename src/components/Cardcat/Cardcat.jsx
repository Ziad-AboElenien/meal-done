import { useEffect, useState } from "react"

export default function Cardcat({categoryInfo}) {




    return (<>


        <div id={categoryInfo.idCategory} className="item category rounded-3">
                <div className="inner shadow rounded-4 overflow-hidden position-relative">
                    <img className="w-100 img-trans rounded-3" src={categoryInfo.strCategoryThumb}alt="Desc" />
                    <div className="layer position-absolute text-white top-0 bottom-0 start-0 end-0  rounded-3">
                        <div className="mx-5">
                            <h3 className="category-name fs-2  text-center">{categoryInfo.strCategory}</h3>
                        </div>
                        <p className='mx-2 fs-5'>{categoryInfo.strCategoryDescription}</p>
                    </div>
                </div>
            </div>
    </>)
}