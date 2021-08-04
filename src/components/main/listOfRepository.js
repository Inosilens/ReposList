import React from "react";
import { Link } from "react-router-dom";
import debounce from "../../services/debounce";

export const ListOfRepository = ({loading,setCurrentPage,inputValue,setInputValue, data, searchValue ,getMoreInfo,setSearchValue}) => {
  let getInput = (e) =>
  {
    e.preventDefault()
    setSearchValue(e.target.value)
    setInputValue(e.target.value)

  }
   getInput = debounce(getInput,500)




  return (
    <div>
      <input type="input" placeholder="Search repository"   onChange={getInput}/>
      <button onClick={(e)=> {
        e.preventDefault()
        setInputValue("")
       document.querySelector("input").value = ""

      }}>Clear</button>
      {data.map((item, index) => (
          <div className="container" key={index}>
            <h1>Repository name : {item.name}</h1>

            <Link to="cart">
              <a onClick={()=>getMoreInfo(item)} href=""> More info</a>{" "}
            </Link>
          </div>
      ))}
    </div>
  );
};
