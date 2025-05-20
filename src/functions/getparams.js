export default function(name){
    const url  = window.location.href;
   let searchParams =  new URL(url).searchParams;
   return searchParams.get(name);
}