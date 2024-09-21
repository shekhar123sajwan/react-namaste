import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showAccordian, setshowAccordian] = useState(null);

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      return (
        c.card?.["card"]?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    });

  return (
    <div className="text-center">
      <h1 className="font-bold my-7 text-2xl ">{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwo}
      </p>

      {categories?.map((c, i) => {
        return (
          <RestaurantCategory
            key={i}
            data={c?.card?.card}
            showItems={showAccordian == i ? true : false}
            showAccordians={() => {
              setshowAccordian(i);
            }}
          />
        );
      })}

      {itemCards ? (
        <>
          <h4>Menu</h4>
          <ul>
            {itemCards.map((item) => {
              return (
                <li key={item.card.info.id}>
                  {item.card.info.name} - Rs.{" "}
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </li>
              );
            })}
          </ul>{" "}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default RestaurantMenu;
