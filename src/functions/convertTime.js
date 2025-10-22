export default function convertTime(minutes){
console.log(minutes)
const handM = minutes/60
console.log(handM)
let hoursAndMinutes = String(handM).split(".")
let hours = hoursAndMinutes[0]
console.log(hoursAndMinutes)
let minut = Number(hoursAndMinutes[1]/100*60)
//efter man har fået minutterne,er minut talet kæmpe stort fordi det normalt er et komma tal
//så derfor splitter jeg den først op
console.log(minut)
//her sørger jeg for at fikse det, hvis der et komma i udregning
minut =String(minut).replace(".","")
console.log(minut)
let newMinut = String(minut).split("")
//og derefter vælger jeg de 2 første decimaler
minut = newMinut[0] + newMinut[1]
return hours +"h " + Math.ceil(minut) + "m"

}