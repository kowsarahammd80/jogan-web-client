import React from "react";
import './Upset.css'
import upsetWorker from '../../assets/Worker.jpg'

const Upset = () => {
  return (
    <div className="mx-0 lg:mx-10 mt-10 mb-5">
      <div className="grid grid-cols-1 lg:grid-cols-2">

        <div className="text-center lg:text-start flex justify-center items-center">
            <div className="mr-0 lg:mr-10">
              <h1 className="text-3xl font-semibold mb-5">Are You Search Your Category Job ? </h1>

              <h1 className="mb-3 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptate, tempora magni iure laudantium illum nostrum reprehenderit quaerat esse sapiente.</h1>

              <button className="button-hero mb-3">Join Now</button>
            </div>
        </div>
          <img src={upsetWorker} alt=""  className="Upset-Worker rounded-lg" />
        <div>

        </div>

      </div>
    </div>
  );
};

export default Upset;
