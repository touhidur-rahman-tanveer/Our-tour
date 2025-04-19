import React, { useState } from "react";
import "./Package.css";

const Package = ({ tour, handleInterestedBtn, handleNotInterestedBtn }) => {
  const { name, image, info, price } = tour;
  const [readmore, setReadmore] = useState(false);

  const handleReadMoreBtn = () => {
    setReadmore(!readmore);
  };

  return (
    <div className="package-card">
      <img src={image} alt={name} />
      <div className="package-content">
        <h2>{name}</h2>
        <p>
          {readmore ? info : `${info.substring(0, 200)} ....`}
          <button className="read-more-btn" onClick={handleReadMoreBtn}>
            {readmore ? "Show Less" : "Read More"}
          </button>
        </p>
        <h3>Price: ${price}</h3>
        <div className="btn-container">
          <button
            onClick={() => handleNotInterestedBtn(tour.id)}
            className="read-more-btn"
          >
            Not Interested!
          </button>
          <button
            onClick={() => handleInterestedBtn(tour)}
            className="read-more-btn"
          >
            Interested!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Package;
