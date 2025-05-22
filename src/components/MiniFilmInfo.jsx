import convertTime from "../functions/convertTime.js"
import findObjects from "../functions/findObjects.js"
import "../styles/components/minifilminfo.scss"

export default function MiniFilmInfo({title,director, rating, genres, runTime, givenClass = "miniFilmInfo "}){
   const newDirector =  findObjects(director,"job", "Director")
   
   runTime?runTime = convertTime(runTime): ""
    return(
        <div  className={`miniFilmInfo ${givenClass}__miniFilmInfoDiv`}>
        <h2 className={`miniFilmInfo__heading ${givenClass}__titleHeading`}>{title}</h2>
        <div className={`miniFilmInfo__directorDiv ${givenClass}__directorDiv`}>
            <p>Director: {newDirector?.name} | <img src="/star.png" alt="" />{" "+rating}</p>
        </div>
                <div className={`miniFilmInfo__factBoxesDiv ${givenClass}__factBoxesDiv`}>
                    {genres?.map((genre, index) =>{
                        return <p key={index} className={`miniFilmInfo__factBox ${givenClass}__factBox`}>{genre?.name}</p>
                    })}
                    <p className={`miniFilmInfo__factBox ${givenClass}__factBox`}>{runTime}</p>
</div>
        </div>
    )
}