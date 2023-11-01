import React, { useRef, useState } from "react";
import { restaurantList } from "../../Dummy_data";
import RestaurentCard from "./RestaurentCard";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState(restaurantList);

  const handleClick = () => {
    const filteredList = listOfRestaurent.filter(
      (star) => star.data.avgRating > 4
    );
    setListOfRestaurent(filteredList);
  };
  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button className="filter-btn" onClick={handleClick}>
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {/* Restaurent Card */}

        {listOfRestaurent.map((restaurant) => {
          return (
            <RestaurentCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
