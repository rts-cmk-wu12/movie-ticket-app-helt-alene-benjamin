import "../styles/components/textInput.scss"
export default function TextInput({label = "Værd sød at skrive en label", name, placeholder = "", type = "text", children, val = null}){

    function check(evt){
        evt.target.classList.remove("input--fail")
    }
    return(
        <>
 <label className="textInput__label" htmlFor="name">{label}</label>
            <input onInput={check}  type={type} defaultValue={val ==null ?"" : val}  className="textInput" name={name} />
            </>
    )
     
}