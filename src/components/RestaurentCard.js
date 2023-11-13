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
    <div className="m-4 p-4 w-[200px] h-[300px] rounded-lg overflow-y-scroll bg-gray-100 hover:bg-gray-400 ">
      <img className="res-logo rounded-s " src={CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold py-4 text-lg">{name}</h2>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{area}</h4>
      <h4>{avgRating}</h4>
      <h4>{lastMileTravelString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

// Higher Order Function
// input -> Component(RestaurentCard) ->newComponent(RestaurentCardIsopen)

export const isOpenrestaurent = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Open
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
