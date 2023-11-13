import React, { useEffect, useState } from "react";
import useRestaurentMenu from "../utils/UseRestaurentMenu";
import Restaurentcatogeries from "./Restaurentcatogeries";
// import { MENU_URL } from "../utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
export const RestaurentMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
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

  const hello = (val) => {
    console.log("hello world", val);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(35, resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const catogeries =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {catogeries.map((catogery, index) => {
        return (
          <Restaurentcatogeries
            key={catogery?.card?.card?.title}
            showItem={index === showIndex ? true : false}
            data={catogery?.card?.card}
            setShowIndex={() => setShowIndex(index)}
            hello={hello}
          />
        );
      })}
    </div>
  );
};
