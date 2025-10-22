import { useEffect, useState } from "react"

export default function ReadMoreText({maxWords = 10, children, givenClass} ){
    //skal bare burge teksten inde i sig
    console.log(screen.width)
    const [text, setText]= useState("")
    const [buttonText, setButtonText] = useState("Read More")
    //her laver jeg en variabel jeg kan tage lægden af
    const textLength = String(children)?.split(" ")
    //her tager jeg texten ud, men kun med det antal ord jeg skal bruge
   const shortText = String(children)?.split(" ")?.slice(0,maxWords)?.join(" ")
   useEffect(()=>{
   setText(shortText)
   }, [children])
   
    function showAllText(){
        buttonText == "Read More"?  setText(children) +setButtonText("Read Less"):  setText(shortText) +setButtonText("Read More")  
    }
    return (
        /*Her tjekker at man er på mobil, og at sætning overhovdet er lang nok til at have en read more*/

        
       window.innerWidth < 700 && textLength.length > maxWords? <p className={`${givenClass}__text`}>{text}<span className={`${givenClass}__readMore`}  onClick={showAllText}> { buttonText}</span></p>: <p className={`${givenClass}__text`}>{children}</p>
    )

}