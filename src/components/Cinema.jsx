import { DiVim } from "react-icons/di";
import "../styles/components/cinema.scss";
import { useState } from "react";
export default function Cinema({ rows, numberOfRows = 1,ocupiedSeats }) {
    //her laver jeg et nyt array så den kan køre pr row
    const [color, setColor] = useState("black")
    //dette object bruges til a kategorisere sæderne med bogstaver også
    const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n"]
    //dette er det objekt der bruges til at sætte talene i system det behøver ikke at være udfyldt til starten
    const lettersObj ={
       
    }
    let rowIndex
    return (
        //først mapper jeg arrayet med mine objekter i, som har en align prpety
        <div className="cinema">
            <h2 className="cinema__screen">Screen</h2>
        <div className="cinema__view">
            {rows.map((element,index) => {
                console.log(element.align)
                //her kører jeg en map på rowen

                return ( <div key={index} style={{justifyItems: element.align}} className="cinema__collection">

                    {element.rows.map((row,index) => {
                        //rowIndex = det nuværende bogstav
                        rowIndex = letters[index]
                        
                        //her laver jeg et nyt array ud fra antal af sædder på en række
                        let seats = []
                        for (let i = 0; i < row; i++) {
                            seats.push("")
                        }
                        //hernede returner jeg en row div
                        return (
                            <div key={index} className="cinema__row">
                                {/*Og inde i row diven, mapper jeg sæderne*/}
                                {seats.map((seat,index) => {
                                    
                                     //herned tjekker jeg om den ovehovdet findes, og hvis den ikke gør det, bliver den til et
                                    isNaN(lettersObj[rowIndex])? lettersObj[rowIndex] =1: lettersObj[rowIndex] += 1
                                    //her sætter jeg bostavet sammen med tallet så jeg får sædeidet
                                    let letter =rowIndex + [lettersObj[rowIndex]]
                                   const found = ocupiedSeats.find((seat)=>{ return letter == seat})
                                    return (
                                    <>
                                   
                                    {found == undefined ?<div id={letter} onClick={(evt)=>{evt.target.classList.toggle("cinema__seat--selected")}}  key={index} className="cinema__seat">{""}</div>:  <div id={rowIndex + [letter]}   key={index} className="cinema__seat cinema__seat--ocupied">{""}</div>}
                                    </>
                            )
                                
                                
                                })}</div>)
                    })}</div>)
            })
            }
           
            </div>
            <ul className="cinema__list">
                <li className="cinema__listItem">Selected</li>
                <li className="cinema__listItem">Reserved</li>
                <li className="cinema__listItem">Avilable</li>
            </ul>
            </div>
        
        )
}