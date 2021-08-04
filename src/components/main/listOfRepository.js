import React from "react";
import { Link } from "react-router-dom";
import debounce from "../../services/debounce";

export const ListOfRepository = ({setCurrentPage,inputValue,setInputValue, data, searchValue ,getMoreInfo,setSearchValue}) => {
  let getInput = (e) =>
  {
    e.preventDefault()
    setSearchValue(e.target.value)
    setInputValue(e.target.value)

  }
   getInput = debounce(getInput,500)



  if (!data) {
    return (
      <div className="Loading">
        <div className="windows8">
          <div className="wBall" id="wBall_1">
            <div className="wInnerBall" />
          </div>
          <div className="wBall" id="wBall_2">
            <div className="wInnerBall" />
          </div>
          <div className="wBall" id="wBall_3">
            <div className="wInnerBall" />
          </div>
          <div className="wBall" id="wBall_4">
            <div className="wInnerBall" />
          </div>
          <div className="wBall" id="wBall_5">
            <div className="wInnerBall" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <input type="input"    onChange={getInput}/>
      <button onClick={(e)=> {
        e.preventDefault()
        setInputValue("")
       document.querySelector("input").value = ""

      }}>Clear</button>
      {data.map((item, index) => (
          <div className="container" key={index}>
            <h1>Repository name : {item.name}</h1>
            <h3>ID : {item.id}</h3>

            <Link to="cart">
              <a onClick={()=>getMoreInfo(item)} href=""> More info</a>{" "}
            </Link>
          </div>
      ))}
    </div>
  );
};
