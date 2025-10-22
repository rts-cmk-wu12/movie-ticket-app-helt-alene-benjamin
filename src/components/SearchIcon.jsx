import { FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar";
import { useState } from "react";

export default function SearchIcon(){
    const [serchbar, setSearchBar] = useState("")
    return(
        <>
        <FaSearch onClick={()=> { setSearchBar(<SearchBar></SearchBar>)}} />
        {serchbar}
        </>

    )
}