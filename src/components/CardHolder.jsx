import { useEffect, useState } from "react";
import "../styles/components/cardHolder.scss";
export default function CardHolder({headign, cards, setCardNumber}){
const [selectedCard, setSelectedCard] = useState(0)




let cardNumbersArray= []

cards.forEach(element => {
   let num  = element.number
   let newNum =num.split("")
   let count = 0

   let newArray = []
   for(let i = 0; i < newNum.length; i++){
  
    if(i == 4 || i == 9 || i == 14){
 newArray.push(" ")
    }else{
        if(i <14){
            newArray.push("*")
        }else{
        newArray.push(newNum[i])
        }
    }
   }
   cardNumbersArray.push(newArray)

    
});
useEffect(()=>{
    setCardNumber(cardNumbersArray[0])
},[])

        return(
           <section className="cardHolder">
            <div className="cardHolder__HeadDiv">
                <h2 className="cardHolder__heading">Payment Method</h2>
                <p className="cardHolder__change">Change</p>
            </div>
            <div className="cardHolder__cardScroller">
              {cards?.map((card, index)=>{
                return(
           <div id={index} onClick={()=>{changeCard(index)}} className={selectedCard == index ?`cardHolder__card cardHolder__card--selcted`: "cardHolder__card" }>
       <img className="cardHolder__logo" src="/mastercard.png" alt="" />
       <p className="cardHolder__balance">{card.balance}</p>
       <div className="cardHolder__bottomDiv">
        <div className="cardHolder__nameInfo">
            <p className="cardHolder__cardHolder">Card Holder</p>
            <p className="cardHolder__name">{card.name}</p>
        </div>
        <p>{cardNumbersArray[index]}</p>
       </div>
           <img className="cardHolder__backgroundImg" src="/card.png" alt="" />
           </div>)
           function changeCard(id){
            setSelectedCard(id)
            console.log(id)
            setCardNumber(cardNumbersArray[id])

           }
        })}
            </div>
           </section> 
           
        )
}