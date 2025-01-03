
import React from 'react';
import image1 from "../assets/image1.svg"; import image8 from "../assets/image8.svg";
import image2 from "../assets/image2.svg"; import image9 from "../assets/image9.svg";
import image3 from "../assets/image3.svg"; import image10 from "../assets/image10.svg";
import image4 from "../assets/image4.svg"; import image11 from "../assets/image11.svg";
import image5 from "../assets/image5.svg"; import image12 from "../assets/image12.svg";
import image6 from "../assets/image6.svg"; import image13 from "../assets/image13.svg";
import image7 from "../assets/image7.svg"; import image14 from "../assets/image14.svg";
import "../assets/Carrousel.css";
import Slider from "react-slick";

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
  ];

  const imagesTendances = [
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
  ];

  return (
  <div className="Carrousel">
    <div style={{ margin: "20px" }}>
      <h2>Revoir</h2>
      <Slider {...settings}>
        {imagesRevoir.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Revoir ${index}`}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>

      <h2 style={{ marginTop: "30px" }}>Tendances actuelles</h2>
      <Slider {...settings}>
        {imagesTendances.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Tendances ${index}`}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  </div>
  );
};

export default Carrousel;