import { useNavigate } from "react-router"
import "../styles/components/customForm.scss"
export default function CustomForm({children, submitText = "Send", navigate = "/", heading = "", customFunc = null, extrainputsName = []}){
    //extra inputs er altså dem der ikke ligger direkte inde i formconponentet
      let  navigater = useNavigate()
     //her mapper jeg alle childrens og sørger for at de alle skal have et name
     let inputs = [...extrainputsName]
     children?.forEach(element => {
       
        if(element.type == "input" | element.type.name == "TextInput"){
        element.props.name ? inputs.push(element.props.name): console.log("et input mangler navn" )+  console.log(element)
        }
     });
    


    function submited(event){
    event.preventDefault()

        let answer = true
        const formData = new FormData(event.target)
       //her tjekker jeg alle input igennem
       inputs.forEach((input)=>{
       
        if( formData.get(input) == "" | formData.get(input) == undefined ){
            answer = false
            document.querySelector(`input[name=${input}]`).classList.add("input--fail")

        }else{
             document.querySelector(`input[name=${input}]`).classList.remove("input--fail")
        }
       })
       if(answer == false){
        return
       }
     
       
        customFunc !== null? customFunc(formData) : navigater(navigate)
    
    }
    return(
       <form className="customForm" onSubmit={submited}>
        {heading ? <h2 className="customForm__heading">{heading}</h2> : ""}
        {children}
        <input className="customForm__submit" value={submitText} type="submit" />
       </form>
    )
}