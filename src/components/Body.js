import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import RestaurentCard, { isOpenrestaurent } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { UserContext } from "../utils/userContext";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurent, setFilteredRestaurent] = useState([]);
  const [searchText, setSearchtext] = useState("");
  const nameDataFromContext = useContext(UserContext);
  // here RestaurentCardOpen is an HOC
  const RestaurentCardOpen = isOpenrestaurent(RestaurentCard);

  const onlineStatus = useOnlineStatus();

  const handleClick = () => {
    const filteredList = listOfRestaurent.filter(
      (star) => star?.info?.avgRating > 4
    );
    setFilteredRestaurent(filteredList);
  };

  const handleInputChange = (e) => {
    nameDataFromContext.setUserName(e.target.value);
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
  console.log(listOfRestaurent);
  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet Connection;
      </h1>
    );
  }

  return listOfRestaurent?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            className=" border-solid border-black border "
            type="text"
            value={searchText}
            onChange={(e) => setSearchtext(e.target.value)}
          />
          <button
            className=" bg-green-100 py-2 px-4 rounded-lg "
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
        <div className="search m-4 p-4 flex items-center ">
          {/* <button
            className="bg-gray-100 px-4 py-2 rounded-lg"
            onClick={handleClick}
          >
            Top Rated Restaurents
          </button> */}
          <input
            type="text"
            className="border"
            value={nameDataFromContext.loggedInUser}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="res-container flex flex-wrap">
        {/* Restaurent Card */}

        {filteredRestaurent.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurents/" + restaurant.info.id}
            >
              {restaurant.info.isOpen ? (
                <RestaurentCardOpen {...restaurant.info} />
              ) : (
                <RestaurentCard {...restaurant.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
