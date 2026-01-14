import useRestarantMenu from "../utils/useRestaurantMenu";
import MenuData from "../utils/MenuData";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestarantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines } = MenuData.data.cards[2].card.card.info;
  const { costForTwoMessage } = MenuData.data.cards[2].card.card.info;

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {(
          MenuData?.data?.cards
            ?.find((c) => c.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(
              (cat) => cat?.card?.card?.itemCards || []
            ) || []
        ).map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
