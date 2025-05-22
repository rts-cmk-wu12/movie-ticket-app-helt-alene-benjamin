import Cinema from "../components/Cinema"
import Header from "../components/Header"
import getparams from "../functions/getparams"

export default function BuyTicket(){
    const film = getparams("film")
    console.log(film)
    return (
        <>
        <Header heading={"Book ticket"} ></Header>
        <form action="" className="bookTicketForm">
            
            <select id="cars" name="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
  </select>
        </form>
    <Cinema ocupiedSeats={["d1","d2","d3","d4","d5", "d6", "d7", "d8", "e1","e2","e3","e4","e5", "e6", "e7", "e8"]} rows={[{rows:[3,4,4,4,4,3], align: "end"},{rows:[3,4,4,4,4,3], align: "left"} ]} numberOfRows={1}></Cinema>

    </>)
}