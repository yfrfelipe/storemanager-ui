import React from "react";

const Card = (props) => {
  return (
    <div className="col-12 col-lg-12 col-xl-4" >
      <section className="card card-fluid card-1">
        <div className="card-body">
          <div className="d-flex align-items-center mb-3">
            <h3 className="card-title mr-auto">{props.title}</h3>
            <div className="card-title-control" ><h1>{props.quantity}</h1></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
