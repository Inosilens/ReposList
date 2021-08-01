import React from "react";
import { Link } from "react-router-dom";

export const ListOfRepository = ({ data, loading ,getMoreInfo}) => {
  if (loading) {
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
      {data.map((item, index) => (
          <div className="container" key={index}>
            <h1>Repository name : {item.name}</h1>
            <h3>ID : {item.id}</h3>

            <Link to="cart">
              <a onClick={()=>getMoreInfo(item)} href=""> Open repository</a>{" "}
            </Link>
          </div>
      ))}
    </div>
  );
};
