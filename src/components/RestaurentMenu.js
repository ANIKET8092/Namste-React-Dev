import React, { useEffect, useState } from "react";
import useRestaurentMenu from "../utils/UseRestaurentMenu";
// import { MENU_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
export const RestaurentMenu = () => {
  const { resId } = useParams();
  // const [resInfo, setResInfo] = useState(null);
  const resInfo = useRestaurentMenu(resId);

  // useEffect(() => {
  //   restaurentMenu();
  // }, []);
  // const restaurentMenu = async () => {
  //   const data = await fetch(MENU_URL + resId + "&submitAction=ENTER");

  //   if (!data.ok) {
  //     throw new Error("Error in api call");
  //   }

  //   const response = await data.json();

  //   setResInfo(response);
  // };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards);

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
