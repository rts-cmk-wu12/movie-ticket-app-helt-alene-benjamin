import { Link } from "react-router";
import "../styles/components/linkButton.scss";
export default function LinkButton({url = "/", givenClass, children = "Please type text", backgroundColor}){
return(
    <Link style={{backgroundColor: backgroundColor}}  className={`linkbutton ${givenClass}__button`} to={url}>{children}</Link>
)
}