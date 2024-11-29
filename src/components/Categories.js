
import React from 'react';
import Comedie from "../assets/Comedie.svg"; 
import Action from "../assets/Action.svg";
import Drame from "../assets/Drame.svg"; 
import Sci_Fi from "../assets/Sci_Fi.svg";
import Romance from "../assets/Romance.svg";
import Thriller from "../assets/Thriller.svg"; 
import EmissionTV from "../assets/EmissionTV.svg"; 
import "../assets/Categories.css";
import Slider from "react-slick";

const Categories = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const imagesRevoir = [
    Comedie,
    Action,
    Drame,
    Sci_Fi,
    Romance,
    Thriller,
    EmissionTV,
  ];

    return (
        <div className="Categories">
            <h3>Catégories</h3>
            <Slider {...settings}>
                {imagesRevoir.map((img, index) => (
                <div key={index}>
                <img
                src={img}
                alt={`PROGRAMMES ORIGINAUX NETFLIX ${index}`}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
                />
                </div>
                ))}
            </Slider>
        </div>
    );
};

export default Categories;