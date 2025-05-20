import { useEffect, useState } from "react"
import getparams from "../functions/getparams"
import fetcher from "../functions/fetch"
import ImageScroll from "../components/ImageScroll"

export default function Details(){
const id  = getparams("film")
console.log(id)
 const [detailed, setdetailed] = useState({})
    useEffect(()=>{ async function tester() {
        setdetailed(await fetcher(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,"GET"))
        
    } tester()}, [])
    console.log(detailed)
    return(
        <>
        <h1>{detailed?.title}</h1>
        <ImageScroll images={[detailed?.backdrop_path, detailed?.poster_path]}></ImageScroll>
        </>
    )
}