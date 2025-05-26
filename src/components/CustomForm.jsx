import { useNavigate } from "react-router"
import "../styles/components/customForm.scss"
export default function CustomForm({children, submitText = "Send", navigate, heading = ""}){
      let  navigater = useNavigate()
    function submited(event){
        const formData = new FormData(event.target)
        event.preventDefault()
        console.log(formData.get("cinema"))
        navigater(navigate)
    
    }
    return(
       <form className="customForm" onSubmit={submited}>
        {heading ? <h2 className="customForm__heading">{heading}</h2> : ""}
        {children}
        <input className="customForm__submit" value={submitText} type="submit" />
       </form>
    )
}