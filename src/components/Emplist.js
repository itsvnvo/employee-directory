import React from "react";

function Emplist(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.image} alt={props.email} />
      <strong>Name:</strong> {props.firstName} {props.lastName}
      <div className="card-body">
        <h4 className="card-title">
        </h4>
        <ul className="empList">
          <li>
            <strong>E-Mail:</strong> {props.email}
          </li>
          <li>
            <strong>Employee Number:</strong> {props.cell}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Emplist;
