import { IoIosArrowBack } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import "../styles/components/headerSide.scss"
import { Navigate, useNavigate } from "react-router";
export default function Header({ heading, bookmark = false, search = false}){
     let navigate = useNavigate();
return(
<header className="headerSide">
  
    <div className="headerSide__div"><IoIosArrowBack onClick={()=>(navigate(-1))} className="headerSide__icon" /></div>
        <div className="headerSide__div"><h1 className="headerSide__heading">{heading}</h1>
        </div>
        <div className="headerSide__div">
    {bookmark? <FaBookmark className="headerSide__icon" />: ""}
     {search? <IoIosSearch className="headerSide__icon" />: ""}
        </div>
    
</header>
)
}