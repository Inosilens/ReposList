import React from "react";
import {Link} from "react-router-dom";

import debounce from "../../services/debounce";


export const ListOfRepository = ({inputValue, setInputValue, data, getMoreInfo, setCurrentPage}) => {

    const func = debounce((e) => {
            e.preventDefault()
            setInputValue(e.target.value)
            setCurrentPage(1)

        }
        , 700)
    const clearSearch = () => {
        setInputValue("")
        setCurrentPage(1)
    }


    return (
        <div>

            <div className="header d-flex flex-row justify-content-center align-items-center">
            <input className="inputSearch" type="input" placeholder="Search repository" onChange={func}/>
            <button className="btn btn-outline-primary" onClick={clearSearch}>Clear search</button>
            </div>
            {inputValue ? <div className="resultSearch">Result of search : {inputValue} </div> : null}
            <div className="container d-flex flex-column justify-content-center">
            {data.map((item, index) => (
                <div className="container-fluid d-flex justify-content-center  border border-danger p-3" key={index}>
                    <h1> {item.name}</h1>
                    <h3>Stars : {item.stargazers_count}</h3>

                    <Link to="cart">
                        <a onClick={() => getMoreInfo(item)} href=""> More info</a>{" "}
                    </Link>
                </div>
            ))}
            </div>
        </div>
    );
};
