import { Children } from "react"
import "../styles/components/moviesThumb.scss"
import ShowRating from "./ShowRating"
import ShowYear from "./ShowYear"
import { Link } from "react-router"
export default function MoviesThumb({givenClass = "", img, givenWidth ="200px",title, imgHeigth, headingFontSize, rating = null, releaseDate = null, filmID  }){

    return(
        <Link className="moviesThumb__link" to={`/details?film=${filmID}`}>
        <article style={{"width": givenWidth, }} className={`moviesThumb ${givenClass}`}>
            <img style={{"width": givenWidth, height: imgHeigth}} className={`moviesThumb__img ${givenClass}__img`} src={`https://image.tmdb.org/t/p/original${img}`} alt="" />
            <h3 style={{"fontSize": headingFontSize}} className={`moviesThumb__heading ${givenClass}__heading`}>{title}</h3>
            {rating == null? "":<ShowRating rating={rating}></ShowRating>}
            {releaseDate == null? "":<ShowYear year={releaseDate}></ShowYear>}
            
           
        </article>
        </Link>
    )
}