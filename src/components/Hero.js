
import React from 'react';
import "../assets/Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <span className="hero-label">GROFLIX </span><span className="original">ORIGINAL</span>
        <h1 className="hero-title">NARCOS</h1>
        <p className="hero-subtitle">Regardez la saison 3 maintenant</p>
        <p className="hero-description">
          Le cartel de Cali reprend le pouvoir en Colombie.<br/>
          Les successeurs d'Escobar passent<br/>
          à l'action et déclarent la guerre au...
        </p>
        <div className="hero-buttons">
          <button className="btn btn-play">▶ Lecture</button>
          <button className="btn btn-mylist">+ My List</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;