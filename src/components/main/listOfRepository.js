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


            <input className="m-3" type="input" placeholder="Search repository" onChange={func}/>
            <button className="btn btn-outline-primary" onClick={clearSearch}>Clear search</button>
            {inputValue ? <div>Result of search : {inputValue} </div> : null}
            {data.map((item, index) => (
                <div className="container-fluid  border border-danger p-3" key={index}>
                    <h1> {item.name}</h1>

                    <Link to="cart">
                        <a onClick={() => getMoreInfo(item)} href=""> More info</a>{" "}
                    </Link>
                </div>
            ))}
        </div>
    );
};
