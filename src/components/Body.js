import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

let Body = () => {
  let [resList, setresList] = useState([]);

  const [searchText, setsearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const promotedRestaurant  = withPromotedLabel(RestaurantCard);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.4704756&lng=73.8698726&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    // Optional Chaining
    setresList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false) {
    return <h1>🔴 Offline, Please check your internet connection!!</h1>;
  }

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-purple-50">
      <div className="filter flex align-center justify-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid ="search-input"
            className="border border-solid border-black "
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-purple-200 m-4 rounded-lg font-bold cursor-pointer"
            onClick={() => {
              console.log(searchText);

              let filteredName = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredName);
            }}
          >
            {" "}
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex item-center">
          <button
            className="px-4 py-2 bg-purple-200 m-4 rounded-xl font-bold cursor-pointer"
            data-testid="top-rated-btn"
            onClick={() => {
              let filteredList = resList.filter(
                (restaurant) => restaurant.info.avgRating > 4
              );
              setresList(filteredList);
            }}
          >
            {" "}
            Top Rated Restaurants
          </button>
        </div>
      </div>
        <div className="flex flex-wrap align-center justify-center">
          {filteredRestaurant.map((restaurantName) => (
            (restaurantName.info.promoted) ? (
              <promotedRestaurant
                key={restaurantName.info.id}
                resData={restaurantName}
              />
            ) : (
            <RestaurantCard
              key={restaurantName.info.id}
              resData={restaurantName}
            />
          )))}
        </div>
    </div>
  );
};

export default Body;
