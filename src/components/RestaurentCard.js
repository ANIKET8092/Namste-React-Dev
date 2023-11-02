import React from "react";
import { CDN_URL } from "../utils/constant";
const RestaurentCard = (props) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwo,
    avgRating,
  } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <h4>{avgRating}</h4>
      <h4>{lastMileTravelString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurentCard;
