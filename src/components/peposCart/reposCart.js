import React from 'react';
import {Link} from "react-router-dom";

function ReposCart({reposId}) {


    if (!reposId) {
        return (
            <div>
                <Link to="/">
                    <button> Back to list</button>

                </Link>
                <h3>Failed load , tap button </h3>
            </div>

                ) }

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
                    <img src={reposId[0].owner.avatar_url} alt="avatar"/>

                </div>
            )}

        </div>
    );
}

export default ReposCart;