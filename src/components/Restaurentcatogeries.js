import React, { useState } from "react";
import ItemList from "./ItemList";

const Restaurentcatogeries = ({ data, showItem, setShowIndex, hello }) => {
  const { title, itemCards } = data;
  // console.log(hello());
  const handleClick = () => {
    setShowIndex();
    hello("helloesss");
  };

  return (
    // Header
    <div>
      <div className="w-[50%]  bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {title}
            <span> ({itemCards?.length})</span>
          </span>
          <span>🔽</span>
        </div>
        {/* Accordian body */}
        {showItem && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};

export default Restaurentcatogeries;
