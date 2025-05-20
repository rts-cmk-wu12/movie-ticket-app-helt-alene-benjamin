import { FaHouse } from "react-icons/fa6";
import { NavLink } from "react-router";
import { FaCompass } from "react-icons/fa";
import { CiBookmarkMinus } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";

import "../styles/components/footer.scss"


export default function Footer(){
    return(
        <footer className="footer">
            <ul className="footer__list">
                <li className="footer__listItem">
                    <NavLink className="footer__link" to="/"><FaHouse className="footer__icon" /></NavLink>
                     </li>
                    <li className="footer__listItem"><NavLink className="footer__link" to="/"><FaCompass className="footer__icon" /></NavLink></li>
                   <li className="footer__listItem"> <NavLink className="footer__link"  to="/ExploreMovies"><CiBookmarkMinus className="footer__icon" /></NavLink>
                   </li>
                   <li className="footer__listItem"> <NavLink className="footer__link" to="/index"><IoPerson className="footer__icon" /></NavLink></li>


               
            </ul>

        </footer>
    )
}