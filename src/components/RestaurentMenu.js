import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { swiggy_menu_api_URL } from "../utils/constant";
import Shimmer from "./Shimmer";
export const RestaurentMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    restaurentMenu();
  }, []);
  console.log(resId);
  const restaurentMenu = async () => {
    const data = await fetch(
      swiggy_menu_api_URL + resId + "&submitAction=ENTER"
    );

    if (!data.ok) {
      throw new Error("Error in api call");
    }

    const response = await data.json();
    console.log(response);
    setResInfo(response);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>{costForTwoMessage}</h2>
      <ul>
        {itemCards.map((id) => {
          return (
            <li>
              {id.card.info.name} -
              {id.card.info.defaultPrice / 100 || id.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
