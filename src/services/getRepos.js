export const getData = (url)=>{
  return  fetch(url).then(r=>r.json())
}