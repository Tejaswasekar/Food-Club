import RestaurantCard from "./RestaurantCard";
import { use, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

let Body = () => {
  let [resList, setresList] = useState([]);

  const [searchText, setsearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

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
    <div className="body">
      <div className="filter">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="search-text border-solid border-black border"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              console.log(searchText);

              let filteredName = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredName);
            }}
          >
            {" "}
            search
          </button>
        </div>
        <button
          className="filter-btn"
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
      <div className="restaurant-section">
        <div className="restaurant-container">
          {filteredRestaurant.map((restaurantName) => (
            <RestaurantCard
              key={restaurantName.info.id}
              resData={restaurantName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
