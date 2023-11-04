import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import RestaurentCard from "./RestaurentCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteresRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchtext] = useState("");

  const handleClick = () => {
    const filteredList = listOfRestaurent.filter(
      (star) => star.data.avgRating > 4
    );
    setListOfRestaurent(filteredList);
  };

  //   if no dependecy array  => useEffect is called on each render
  // if dependency array is empty []=>useffect is called only once in initial render.
  // if dependency
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();

      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setListOfRestaurent(resData);
      setFilteredRestaurent(resData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return listOfRestaurent?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchtext(e.target.value)}
          />
          <button
            onClick={() => {
              //   search Funcationality

              const filteredRestaurent = listOfRestaurent.filter(
                (restaurent) => {
                  return restaurent.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase());
                }
              );
              setFilteredRestaurent(filteredRestaurent);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={handleClick}>
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {/* Restaurent Card */}

        {filteresRestaurent.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurents/" + restaurant.info.id}
            >
              <RestaurentCard {...restaurant.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
