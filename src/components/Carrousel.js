
import React from 'react';
import "../assets/Carrousel.css";
import "../assets/image1.png";
import Slider from "react-slick";

const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
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
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.png",
    "image5.png",
    "image6.png",
    "image7.png",
  ];

  const imagesTendances = [
    "image8.png",
    "image9.png",
    "image10.png",
    "image11.png",
    "image12.png",
    "image13.png",
    "image14.png",
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