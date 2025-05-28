import { Link } from "react-router";
import "../styles/components/popUp.scss"

export default function PopUp({link, heading, buttonText = "please write buttonText"}){

    return(
           <div className="popUp__overLay">
        <section className="popUp">
         
            <img className="popUp__logo" src="/IconSuccess.png" alt="" />
            <h2 className="popUp__heading">{heading}</h2>
            <p className="popUp__text">Adele is a Scottish heiress whose extremely
wealthy family owns estates and grounds.
When she was a teenager. Read More</p>
<Link to={link} className="popUp__link">{buttonText}</Link>
        </section>
        </div>
    )
}