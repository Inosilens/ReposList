import React from "react";
import {Link} from "react-router-dom";

export default function ReposCart({reposId}) {
    if (!reposId) {
        return (
            <div>
                <Link to="/">
                    <button> Back to list</button>
                </Link>
                <h3>Failed load , tap button </h3>
            </div>
        );
    }

    return (
        <div className="pt-5 mt-5">


            {reposId.map((item, index) => (
                <div className="container-fluid d-flex flex-row justify-content-around p-5" key={index}>
                    <div className="container__img">
                        <img src={reposId[0].owner.avatar_url} width="200px" className="rounded-circle" alt="avatar"/>
                    </div>
                    <div className="container__options text-left">
                        <h1> {item.name}</h1>
                        <h3>Repository ID : {item.id}</h3>
                        <h2>Watcher : {item.watchers_count
                        }</h2>
                        <h2>Language : {item.language}</h2>
                        <a href={item.html_url} target="_blank">
                            Link to repository
                        </a>
                    </div>
                </div>
            ))}

            <Link to="/">
                <button className="btn btn-outline-primary"> Back to list</button>
            </Link>
        </div>
    );
}


