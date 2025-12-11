
export default function Cardarea({areaInfo}) {




    return (<>


        <div  class="item rounded-3">
                <div class="inner shadow rounded-4 overflow-hidden position-relative">
                    <div class='d-flex flex-column align-items-center gy-5 shadow rounded-4 py-4 justify-content-center'>
                        <i class="fa-solid fa-earth-americas fa-spin fs-1 text-success fa-spin-reverse"></i>
                        <h3 class="category-name fs-2 my-3 text-center">{areaInfo.strArea}</h3>
                </div>
            </div>
                </div>
    </>)
}