import { useContext, useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurentList";
import RestraurentCard from "./RestraurentCard";

import Shimmer from "./Shimmer";
import UserContext from "../utils/UserContext";

const Body = () => {
  const onlineStatus = useOnlineStatus();

  const [listOfRes, setlistOfRes] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const { loggedInUser, setUserName } = useContext(UserContext);

  const fetchData = async () => {
    let data = fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    )
      .then((res) => res.json())
      .then((data) => {
        const cards =
          data.data?.cards[4].card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setlistOfRes(cards);
      });
  };

  if (onlineStatus === false) {
    return <h1>Your are offline! Please check internet connection!</h1>;
  }
  return listOfRes?.length === 0 || !listOfRes ? (
    <Shimmer />
  ) : (
    <div className="m-5">
      <div className="search m-4 p-2 border-black">
        <input type="text" name="search" className="border-[1px]" />
        <button
          type="button"
          name="search"
          className="mx-2 px-4 bg-green-500 rounded-sm hover:bg-green-700"
        >
          Search
        </button>

        <button
          className="bg-red-500 mx-4 px-2 rounded-sm hover:bg-red-700"
          onClick={() => {
            let filterdRes = listOfRes.filter(
              (res) => res?.info?.avgRating < 4.2
            );
            setlistOfRes(filterdRes);
          }}
        >
          Top Rated Restraurent
        </button>
        <input
          type="text"
          className="border border-black"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap">
        {listOfRes.map((res) => {
          return <RestraurentCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Body;
