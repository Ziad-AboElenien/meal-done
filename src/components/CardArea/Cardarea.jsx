import { Link } from 'react-router-dom'
import './Cardarea.css'

export default function Cardarea({areaInfo}) {
  const name = areaInfo?.strArea || 'Unknown'

  // generate three nice HSL colors from the name
  const hash = [...name].reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
  const hue = hash % 360
  const colors = [
    `hsl(${hue}, 75%, 45%)`,
    `hsl(${(hue + 45) % 360}, 70%, 52%)`,
    `hsl(${(hue + 90) % 360}, 62%, 60%)`,
  ]

  return (
    <article className="area-card stacked-card rounded-3" style={{ ['--c1']: colors[0], ['--c2']: colors[1], ['--c3']: colors[2] }}>
      <div className="area-inner shadow rounded-4 overflow-hidden position-relative d-flex flex-column">
        <div className="flag-banner" aria-hidden />

        <header className="area-top pt-4 d-flex align-items-center justify-content-center p-3">
          <i className="fa-solid fa-earth-americas fa-spin fs-1 text-white fa-spin-reverse area-icon" aria-hidden></i>
        </header>

        <div className="area-middle d-flex align-items-center justify-content-center px-3">
          <h3 className="area-name fs-2 mb-0">{name}</h3>
        </div>

        <div className="area-bottom d-flex align-items-center justify-content-center p-3">
          <Link to={`/area/${encodeURIComponent(name)}`} className="area-action" aria-label={`Get meals from ${name}`}>
            <span className="area-action-label">Get Meals</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="area-action-icon" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}

// export default function Cardarea({areaInfo}) {




//     return (<>


//         <div  class="item rounded-3">
//                 <div class="inner shadow rounded-4 overflow-hidden position-relative">
//                     <div class='d-flex flex-column align-items-center gy-5 shadow rounded-4 py-4 justify-content-center'>
//                         <i class="fa-solid fa-earth-americas fa-spin fs-1 text-success fa-spin-reverse"></i>
//                         <h3 class="category-name fs-2 my-3 text-center">{areaInfo.strArea}</h3>
//                 </div>
//             </div>
//                 </div>
//     </>)
// }