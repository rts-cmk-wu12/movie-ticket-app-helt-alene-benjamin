import { useEffect, useState } from "react"
import MoviesRow from "../components/MoviesRow"
import fetcher from "../functions/fetch"

export default function ExploreMovies(){
    //først kommer min fetcher function hvor jeg så gamme min data i en state
    const [popular, setPopular] = useState([])
      useEffect(()=>{ async function tester() {
            setPopular(await fetcher("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1","GET"))
            
        } tester()}, [])
return(
        <MoviesRow posterPath rating heading="Top Movies"  headingFontSize="1.25rem" imgHeigth="250px" movieWidth="11.8rem" data={popular}></MoviesRow>
)


}