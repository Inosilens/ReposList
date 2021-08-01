export const getData = ()=>{
  return  fetch("https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&order=desc&page=1").then(r=>r.json())
}