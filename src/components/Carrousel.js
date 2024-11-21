
import React from 'react';
import image1 from "../assets/image1.png"; import image8 from "../assets/image8.png";
import image2 from "../assets/image2.png"; import image9 from "../assets/image9.png";
import image3 from "../assets/image3.png"; import image10 from "../assets/image10.png";
import image4 from "../assets/image4.png"; import image11 from "../assets/image11.png";
import image5 from "../assets/image5.png"; import image12 from "../assets/image12.png";
import image6 from "../assets/image6.png"; import image13 from "../assets/image13.png";
import image7 from "../assets/image7.png"; import image14 from "../assets/image14.png";
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