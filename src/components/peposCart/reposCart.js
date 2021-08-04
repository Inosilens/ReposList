import React from "react";
import { Link } from "react-router-dom";

export default function ReposCart({ reposId }) {
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
    <div>
      <Link to="/">
        <button> Back to list </button>
      </Link>

      {reposId.map((item, index) => (
        <div className="container" key={index}>
          <img src={reposId[0].owner.avatar_url} width="200px" alt="avatar" />
          <h1> Repository name : {item.name}</h1>
          <h3>Repository ID : {item.id}</h3>
          <h2>Stars : {item.stargazers_count}</h2>
          <a href={item.html_url} target="_blank">
            Link to repository
          </a>
        </div>
      ))}
    </div>
  );
}


