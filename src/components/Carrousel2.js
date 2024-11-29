
import React from 'react';
import n1 from "../assets/n1.svg"; 
import n2 from "../assets/n2.svg";
import n3 from "../assets/n3.svg"; 
import n4 from "../assets/n4.svg";
import n5 from "../assets/n5.svg"; 
import n6 from "../assets/n6.svg"; 
import n7 from "../assets/n7.svg"; 
import "../assets/Carrousel2.css";
import Slider from "react-slick";

const Carrousel2 = () => {
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
    n1,
    n2,
    n3,
    n4,
    n5,
    n6,
    n7,
  ];

  return (
  <div className="Carrousel2">
    <div style={{ margin: "20px" }}>
      <h3>PROGRAMMES ORIGINAUX GROFLIX</h3>
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
  </div>
  );
};

export default Carrousel2;