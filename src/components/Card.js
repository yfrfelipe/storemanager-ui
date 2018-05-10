import React from "react";

const Card = ({ name }) => {
  return (
    <div class="col-12 col-lg-12 col-xl-4" >
      <section class="card card-fluid">
        <div class="card-body">
          <div class="d-flex align-items-center mb-3">
            <h3 class="card-title mr-auto"> Completion Tasks </h3>
            <div class="card-title-control" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
