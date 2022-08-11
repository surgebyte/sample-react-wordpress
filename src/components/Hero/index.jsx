import React from 'react';
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

function Hero(props) {
  let navigate = useNavigate();
  const { page } = props;

  const cleanPageContent = DOMPurify.sanitize(page.content.rendered, {
    USE_PROFILES: { html: true },
  });

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{page.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: cleanPageContent }} />
          <button onClick={() => navigate('/blogs')} className="btn btn-primary mt-10">Blog</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;