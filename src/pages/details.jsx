import { useEffect, useState } from "react"
import getparams from "../functions/getparams"
import fetcher from "../functions/fetch"
import ImageScroll from "../components/ImageScroll"
import MiniFilmInfo from "../components/MiniFilmInfo"
import { data } from "react-router"
import ReadMoreText from "../components/ReadMoreText"
import "../styles/components/details.scss"
import LinkButton from "../components/LinkButton"
import Header from "../components/Header"

export default function Details(){
const id  = getparams("film")

 const [detailed, setdetailed] = useState({})


    useEffect(()=>{ async function tester() {
        setdetailed(await fetcher(`https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&language=en-US`,"GET"))
        
    } tester()}, [])
    console.log(detailed)
  
    return(
        <>
        <Header heading={"Details   "} search></Header>
        <main>
        <article className="detailsSection">
        <ImageScroll givenClass="detailsSection" images={[ detailed?.poster_path,detailed?.backdrop_path]}></ImageScroll>
        <MiniFilmInfo givenClass="detailsSection" title={detailed?.title} rating={detailed?.vote_average /2} director={detailed?.credits?.crew} runTime={detailed?.runtime} genres={detailed?.genres}></MiniFilmInfo>
        <h3 className="detailsSection__synopsisHeading">Synopsis</h3>
        <ReadMoreText givenClass={"detailsSection"} maxWords={30}>{detailed?.overview}</ReadMoreText>
        <LinkButton url={`/BuyTicket?film=${detailed?.title}`} >Buy Ticket</LinkButton>
        </article>

       
        </main>
        </>
    )
}