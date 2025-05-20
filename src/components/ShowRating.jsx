export default function ShowRating({rating}){
    let newrating = rating/2
     let halfRating
    console.log(newrating)
    let ratingsArray  = []
    for(let i = 0; i < newrating; i++){
    
        ratingsArray.push(i)
    }
    if(newrating - ratingsArray[ratingsArray?.length -1] > 0.5){
      halfRating = true
    }


return (
   <div className="rating">
    {ratingsArray?.map((element)=>{
        return <img src="/star.png" alt="" />
    })}
    {halfRating ? <img src="/halfstar.png" alt="" />: ""}

   </div>
)
}