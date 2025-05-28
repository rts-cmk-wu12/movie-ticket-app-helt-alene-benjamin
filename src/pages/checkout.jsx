import { useNavigate } from "react-router";
import Header from "../components/Header";
import CustomForm from "../components/CustomForm";
import TextInput from "../components/TextInput";
import DropDownInput from "../components/DropDownInput";
import CardHolder from "../components/CardHolder";
import { useContext, useState } from "react";
import PopUp from "../components/PopUp";
import { CinemaInfoContext } from "../Context";

export default function Checkout(){
  const [cardNumber, setCardNumber] = useState([])
    const theme = useContext(CinemaInfoContext);
    console.log(theme.cinemaInfo)
    
   
  

  const [popUp, setPopUp] = useState("")
  console.log(cardNumber)
  function test(formData){
    theme.setcinemaInfo("HEj")
     console.log(console.log(formData ))
    setPopUp(<PopUp heading={"Your payment was successful"} link="/eTicket" buttonText="See e-ticket"></PopUp>)
    console.log(popUp)
  }
   

  
    
    return(<>
                <Header heading={"Checkout"} ></Header>
                <main>
                <CardHolder setCardNumber={setCardNumber} cards={[{name: "Peter Nøgenmand", balance: "0.25dk", number: "4121888888888828988"}, {name: "Benjamin Smith", balance: "3000dk", number: "1231231010021012000"},{name: "David Simonsen", balance: "30000000000dk", number: "3000000000000095242"}, {name: "Jackie", balance: "1000dk", number: "1231231000032390988"}]}></CardHolder>
                <CustomForm extrainputsName={["date", "cvv"]} customFunc={test} submitText="Pay Now | $99.4 " heading="Payment Details">
                <TextInput name="email" label="Your email" type="email"></TextInput>
                <TextInput name="name" label="Cardholder name" type="text"></TextInput>
                <TextInput name="cardNumber" val={cardNumber?.join(" ")}  label="Card number" type="text"></TextInput>
                <div style={{display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "2rem"}}>
                    <div>
                    <TextInput name={"date"} label="Date" type="date"></TextInput>
                    </div>
                  <div>
                    <TextInput name={"cvv"} label="cvv" type="number"></TextInput>
                    </div>
                    
                </div>
                
                


                </CustomForm>
                {popUp}
                </main>
                </>
        
    )
}