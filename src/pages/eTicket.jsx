import { useContext, useState } from "react"
import { CinemaInfoContext } from "../Context"
import Ticket from "../components/Ticket"
import PopUp from "../components/PopUp"

export default function eTicket(){
        const [cinemaInfo, setCinemainfo] = useContext(CinemaInfoContext)
        console.log(cinemaInfo)
        const [popUp,setPopUp] = useState("")
        function getPopUp(){
            setPopUp(<PopUp heading={"du har downloadet den"} buttonText="Back To Home" link={"/"}></PopUp>)
        }
    
    return(
        <>
        <h1>{cinemaInfo.film}</h1>
        <Ticket cinema={cinemaInfo.cinema} seats={cinemaInfo.seats} date={cinemaInfo.date} film={cinemaInfo.film} time={cinemaInfo.time}></Ticket>
        {popUp}
        <button className="buyButton" onClick={ getPopUp}>Downlaod E-Ticket</button>
        </>

    )
}