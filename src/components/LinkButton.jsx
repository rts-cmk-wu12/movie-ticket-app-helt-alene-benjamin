import "../styles/components/linkButton.scss";
export default function LinkButton({url = "/", givenClass, children = "Please type text", backgroundColor}){
return(
    <a style={{backgroundColor: backgroundColor}}  className={`linkbutton ${givenClass}__button`} href={url}>{children}</a>
)
}