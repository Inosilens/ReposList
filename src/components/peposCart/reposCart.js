import React from 'react';
import {Link} from "react-router-dom";

function ReposCart({reposId}) {


    return (
        <div>
            <Link to="/">
                <button > Back to list </button>
            </Link>
            {reposId.map((item,index)=>

                <div className="container" key={index}>
                    <h1>{item.id}</h1>
                    <h3>{item.name}</h3>
                    <h2>Stars : {item.stargazers_count}</h2>

                </div>
            )}

        </div>
    );
}

export default ReposCart;