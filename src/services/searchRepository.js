export const searchRepository = (url)=>{
    return  fetch(url).then(r=>r.json())
}