
import React from "react";
import Ida from "../assets/Ida.svg";
import Ilsaimaientlavie from "../assets/Ils_aimaient_la_vie.svg";
import Coldwar from "../assets/Cold_War.svg";
import Lecouteaudansleau from "../assets/Le_couteau_dans_l_eau.svg";
import "../assets/FilmList.css";

const FilmList = () => {
  const imagesFilmList = [
    Ida,
    Ilsaimaientlavie,
    Coldwar,
    Lecouteaudansleau,
  ];

  return (
    <div className="FilmList">    
        {imagesFilmList.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Revoir ${index}`}             
            />
          </div>
        ))}
    </div>
  );
};

export default FilmList;