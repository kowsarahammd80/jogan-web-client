import React from "react";

const WhywithUsCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
      {/* 1st */}

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-5xl">
            <i class="fa-solid fa-handshake"></i>
          </h2>
          <p className="font-semibold text-xl text-center">
            We ar try to connect worker to contactor and contactor worker.{" "}
          </p>

          <div className="card-actions justify-end"></div>
        </div>
      </div>

      {/* 2nd */}

      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-5xl">
            <i class="fa-solid fa-calendar-check"></i>
          </h2>

          <p className="font-semibold text-xl text-center">
            We ar try to confirmation your contract.
          </p>

          <div className="card-actions justify-end"></div>
        </div>
      </div>

      {/* 3rd */}

      <div className="card bg-base-100 shadow-xl">

        <div className="card-body">

          <h2 className="text-center text-5xl">
            <i class="fa-solid fa-stairs"></i>
          </h2>

          <p className="font-semibold text-xl text-center">
          
            We ar try to group you business. And connect to businessman to
            businessman

          </p>

          <div className="card-actions justify-end">
            
          </div>

        </div>

      </div>

    </div>
  );
};

export default WhywithUsCard;
