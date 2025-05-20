import MoviesThumb from "./MoviesThumb"
import "../styles/components/moviesRow.scss"
import ShowRating from "./ShowRating"
//Her er et hjemmelavet kompomonent, "rating" skal ikke have nogle value men bare agives, da den kører dynamisk 
export default function MoviesRow({data, movieWidth = "1000px", givenClass = "", gap = "2rem", imgHeigth = "auto", headingFontSize = "1rem", heading = "Please give heading", flexDirection = "row", rating = null, releaseDate = null, posterPath = null }){
   
    return(
    <>
    <section  className={`moviesRow ${givenClass}`}>
        <h2 className={`moviesRow__heading ${givenClass}__heading`}>{heading}</h2>
        <div className={`moviesRow__flexDiv ${givenClass}__flexDiv`} style={{"overflowX": "scroll", "gap": gap, flexDirection: flexDirection}}>
    {data?.map((element)=>{
       console.log(element)
       return(
        <MoviesThumb releaseDate={releaseDate ?  element?.release_date: null} rating={rating ? element?.vote_average: null} headingFontSize={headingFontSize} imgHeigth={imgHeigth} givenWidth={movieWidth} img={ posterPath == null ?element?.backdrop_path:element?.poster_path} title={element?.title}></MoviesThumb>
        
       )

    })}
    </div>
    </section>
    </>
)
}