import React, { useEffect, useState } from "react";
import Package from "./Package";
import "./Package.css";
const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [interested, setInterested] = useState([]);
  const handleInterestedBtn = (tour) => {
    const interestedTour = [...interested, tour];
    setInterested(interestedTour);
  };
  const handleNotInterestedBtn = (id) => {
    const notInterestedTour = packages.filter(
      (singlePackage) => singlePackage.id !== id
    );
    setPackages(notInterestedTour);
  };

  useEffect(() => {
    fetch("https://www.course-api.com/react-tours-project")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div className="">
      <h1>Welcome to OUR TOUR!</h1>
      <div>
        <h2 className={interested.length === 0 && "ghost"}>
          Packages You Are Interested On !
        </h2>
        <ul className="interested-packages-cotainer">
          {interested.map((data) => (
            <div className="interested-packages">
              <h4>{data.name}</h4>
              <img src={data.image} alt="" />
            </div>
          ))}
        </ul>
      </div>
      <div className="packages-container">
        {packages.map((tour) => (
          <Package
            key={tour.id}
            tour={tour}
            handleInterestedBtn={handleInterestedBtn}
            handleNotInterestedBtn={handleNotInterestedBtn}
          ></Package>
        ))}
      </div>
    </div>
  );
};

export default Packages;
