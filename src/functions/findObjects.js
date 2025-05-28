export default function findObjects(crew, prop, keyWord){
    //Denne funktion modtager crew arrayt, og finder de/det object der passer til det indtaste ouptpur
    
    let found = crew?.find(element=> element[prop] == keyWord)
    
    if(found !== undefined){ 
    return found
    
    }else{
        console.log("Det virkede ikke, gennem tjek dine parameter ", "prop = ", prop, " keyord =", keyWord)
        return "srerer"
}
   

}