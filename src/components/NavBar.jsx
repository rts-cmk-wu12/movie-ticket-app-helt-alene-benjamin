import { NavLink } from "react-router";
import "../styles/components/navBar.scss"
import SearchIcon from "./SearchIcon";
export default function NavBar(){
    return(
        <header className="header">
            <nav className="header__navBar">
                <ul className="header__navList">
                    <li className="header__listItem">
                      <NavLink className="header__link" to={"/test"}>test</NavLink>
                    </li>
                    <li className="header__listItem">
                     <SearchIcon></SearchIcon>
                    </li>
                </ul>
            </nav>
        </header>
    )
}