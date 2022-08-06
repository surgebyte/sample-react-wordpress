import React from 'react';
import { useNavigate } from "react-router-dom";

function Hero() {
  let navigate = useNavigate();
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button onClick={() => navigate('/blogs')} className="btn btn-primary">Blog</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;