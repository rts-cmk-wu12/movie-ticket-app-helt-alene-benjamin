import { useEffect, useState } from "react";
import MoviesRow from "../components/MoviesRow";
import fetcher from "../functions/fetch";
import ShowRating from "../components/ShowRating";

export default function Index(){
    const [commingSoon, setCommingSoon] = useState([])
    useEffect(()=>{ async function tester() {
        setCommingSoon(await fetcher("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1","GET"))
        
    } tester()}, [])
    return(
        <>
      
        <MoviesRow releaseDate  heading="Upcomming"   headingFontSize="1.25rem" imgHeigth="180px" movieWidth="19.6rem" data={commingSoon}></MoviesRow>
        </>
    )
}