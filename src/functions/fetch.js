export default async function fetcher(url = null, method = "GET", noHeader = false){
  //Ligen nu er defualt headeren med Aut og med accecpt
  const headers =  {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkODZjNTIyOGZjM2VkOTYxOWI3YzE2OWZjYjNhNjUxNCIsIm5iZiI6MTczNjc1NDM2MC45NTEsInN1YiI6IjY3ODRjNGI4ZWU4NGZhNGRlZjdiOGNkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p3ZCJLdLrByyhaTfeoA9AV9WiiXzkzHZJaFR4ES9VcI'
  }
  url == null? alert("du mangler url"): console.log("du fetcher urlen: " + url)
  let response
  if(noHeader){
    response = await fetch(url, {method:method})
  }else{
 response = await fetch(url, {method:method, headers })
  }
 let data = await response.json()

 if(data?.results == undefined){ 
  return data}
 else{ return data?.results}
 
}