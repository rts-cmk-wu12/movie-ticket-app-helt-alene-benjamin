import { useContext, useEffect, useState } from "react"
import Cinema from "../components/Cinema"
import CustomForm from "../components/CustomForm"
import DropDownInput from "../components/DropDownInput"
import Header from "../components/Header"
import fetcher from "../functions/fetch"
import getparams from "../functions/getparams"
import "../styles/pages/buyTicket.scss"
import { CinemaInfoContext } from "../Context"
export default function BuyTicket(){
    //her fetcher jeg cinemas som er magnuses api...der indeholder data om biografer
    const [cinemas, setCinemas] = useState([])
    const {cinemaInfo, setCinemainfo} = useContext(CinemaInfoContext)
    console.log(cinemaInfo)
    const [currentCinema, setCurrentCinema] = useState("")
    console.log(cinemaInfo)
    
        useEffect(()=>{ async function tester() {
            setCinemas(await fetcher(`https://cdn.jsdelivr.net/gh/Sh3dow-ware/cinema-data@v1.0.1/cinema-data.json`,"GET", true))
            setCinemainfo("er")
        } tester()}, [])    

      
    const film = getparams("film")


    let test =cinemas?.find((cinema) => cinema.name == currentCinema)
     
    //her tager jeg fat i filmen man har klikket på og opdatere min context til den
     

    return (
        <>
        <Header heading={"Select Seats"} ></Header>
        <CustomForm submitText="Checkout" navigate={"/checkout"}>
            <DropDownInput loadText="Megascope" setVal={setCurrentCinema} name="cinema" label="Cinema" options={cinemas ? cinemas?.map((element)=> element?.name): "Vælg en bio"}></DropDownInput>
            <div className="buyTicketFlexDiv">
            <DropDownInput label="Date" options={["23 maj 2025", "25 may 2025","1 june 2025", "10 june 2025"]}></DropDownInput>
            <DropDownInput label="Time" options={["13:00", "18:00","20:00"]}></DropDownInput>


            </div>
           

          
       
    <Cinema ocupiedSeats={["d1","d2","d3","d4","d5", "d6", "d7", "d8", "e1","e2","e3","e4","e5", "e6", "e7", "e8"]} rows={ test?.["cinema-rows"] ? test?.["cinema-rows"] : [{rows:[3,4,4,4,4,3], align: "end"},{rows:[3,4,4,4,4,3], align: "left"},  ]} numberOfRows={1}></Cinema>
     </CustomForm>

    </>)
}