import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  // https://corsproxy.io/?url=https://example.com/api/

  const fetchData = async () => {
  try {
    const response = await fetch(
      "https://corsproxy.io/?url=https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4706021&lng=73.868921&restaurantId=407778&catalog_qa=undefined&submitAction=ENTER"
    );

    // 1️⃣ Check HTTP status
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    // 2️⃣ Read raw response first
    const text = await response.text();

    // 3️⃣ Check empty response
    if (!text) {
      throw new Error("Empty response received");
    }

    // 4️⃣ Safely parse JSON
    const json = JSON.parse(text);

    console.log(json);

    // 5️⃣ Optional chaining to avoid crashes
    setResInfo(json?.data ?? null);

  } catch (error) {
    console.error("Failed to fetch Swiggy data:", error.message);
  }
};

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.data?.data?.cards[0]?.data;
  // const { itemCards } = resInfo?.cards[2]?.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Pizza</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
