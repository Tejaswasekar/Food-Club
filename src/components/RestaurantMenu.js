import useRestarantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const {resId} = useParams();
  const resInfo = useRestarantMenu(resId);

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
