import React from "react";
import { CDN_URL } from "../utils/constant";
const ItemList = ({ items }) => {
  return (
    <div className="w=9/12">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200  border-b-2 text-left flex justify-between"
        >
          <div className="py-2">
            <div>
              <span className="py-4">₹ {item?.card?.info?.name}</span>
              <span className="p-1">
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className=" p-4 w-3/12">
            <div className="absolute">
              <button className="p-2 mx-2  rounded-lg bg-black text-white  ">
                Add +
              </button>
            </div>
            <img src={CDN_URL + item?.card?.info?.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
