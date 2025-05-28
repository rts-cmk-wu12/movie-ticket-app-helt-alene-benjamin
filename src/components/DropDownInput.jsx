import { useEffect, useState } from "react"
import { IoIosArrowDown } from "react-icons/io";
import "../styles/components/dropDown.scss"

export default function DropDownInput({options = null, loadText = "indtast en loadTekst, hvis du bruger en fetch value", name = "noName", label ="Vær sød at give et label værdi", setVal = null}){
  
    const [values, setValues ] = useState()
    const [buttonVal, setButtonVal] = useState(options[0] ? options[0]: loadText )
    //her laver jeg en useEffect som tjekker for hver gang options bliver indsat
    useEffect(()=>{
        //Hvis options er ingen ting, så bliver den sat til loadTexte
        if(options == ""){
 setButtonVal(loadText)}
 //denne useEffect kører hver gang options blier opdateret
     }, [options])
   
    return(
        <>
        <div className="dropdown">
            <label className="dropdown__label" htmlFor="name">{label}</label>
            {/*For hver dropdown bliver jeg nødt til at adde en hidden array som så har valuen på knappen
            */}
            <input type="hidden" value={buttonVal} name={name} />
        <button className="dropdown__input" type="button" placeholder="Cinema"  onClick={(evt)=>{option(evt.target)+ evt.target.classList.toggle("dropdown__input--open")}} >{buttonVal}<IoIosArrowDown  className="icon" />
</button>
<div className={values ?  "dropdown__dropdownsDiv"+ " dropdown__dropdownsDiv--open": "dropdown__dropdownsDiv" }>
        {values}
        </div>
        </div>
        </>
    )
    function option(parent){
       if(values){
        setValues("")
        return
       }
        setValues(options?.map((option, index)=>{
           //denne onclick er den der kører på hver knap man trykker dernede på
            return <button className="dropdown__dropdowns" key={index} type="button" onClick={(evt)=>{
                //her sætter den val hvis passer
                setButtonVal(option)
                parent.classList.toggle("dropdown__input--open")
                
                setValues("")
                if(setVal !== null){
                    setVal(option)
                }

               
            }}>{option}</button>
        }))

    }
}