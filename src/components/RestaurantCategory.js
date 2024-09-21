import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, showAccordians }) => {
  const handleClick = () => {
    showAccordians();
  };
  return (
    <div className="w-8/12 p-4 mx-auto bg-gray-50 shadow-lg my-3">
      <div className="flex justify-between" onClick={handleClick}>
        <span>{data?.title}</span>
        <span>↓</span>
      </div>

      {showItems ? <ItemList items={data.itemCards} /> : ""}
    </div>
  );
};

export default RestaurantCategory;

// npx tailwindcss -i ./input.css -o ./style.css --watch
