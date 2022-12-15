import React from 'react';
import './HomeHero.css'
import { Link } from 'react-router-dom';

const HomeHero = () => {
  return (
    <div>
      <div className="hero image-div" style={{ backgroundImage: 
         `url("https://www.fool.com.au/wp-content/uploads/2022/02/acquisition-33-16.9.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-semibold shadow-2xl">Get Start a 
            New Work Relationship</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat 
             ut assumenda excepturi exercitationem quasi. In deleniti eaque aut 
              repudiandae et a id nisi.</p>
            <Link>
              <button className="button-hero">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;