import "../styles/components/showYear.scss";
export default function ShowYear({year}){
    let yearSplit = year.split("-")
    let actualtMonth = Number(yearSplit[1])
   const month= ["January","February","March","April","May","June","July",
            "August","September","October","November","December"];
   
    return(
        <>
        <p className="realeseDate">{month[actualtMonth] == undefined  ?""  +" "+ yearSplit[0]:month[actualtMonth] +" "+ yearSplit[0]}</p>
       
        </>
    )
}