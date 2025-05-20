export default function ImageScroll({images, givenClass}){
    return(
        //lige nu har jeg tmdb billed pathen på, men det kan man evt, adde som en ny att
        <div className={`imageScroll ${givenClass}__imageScroll`}>
            {images?.map((src)=>{
              return <img className={`imageScroll__img ${givenClass}__imageScrollImg`} src={`https://image.tmdb.org/t/p/original${src}`} alt="skal indtastet" />
            })}
        </div>
    )
}