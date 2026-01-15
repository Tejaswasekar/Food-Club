import useRestarantMenu from "../utils/useRestaurantMenu";
import MenuData from "../utils/MenuData";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestarantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines } = MenuData.data.cards[2].card.card.info;
  const { costForTwoMessage } = MenuData.data.cards[2].card.card.info;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action 
    dispatch(addItems(item));

  };

  console.log(handleAddItem);

  return (
    <div className="menu-class text-center w-1/2 m-auto">
      <h1 className="font-bold text-2xl text-center m-4 p-4">{name}</h1>
      <p className="font-bold text-xl">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2 className="font-bold text-xl m-4 p-4 ">Menu</h2>
      <ul>
        {(
          MenuData?.data?.cards
            ?.find((c) => c.groupedCard)
            ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(
              (cat) => cat?.card?.card?.itemCards || []
            ) || []
        ).map((item) => (
          <li className="border m-4 flex justify-between items-center p-4" key={item.card.info.id}>
            {item.card.info.name} - Rs.{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            <button onClick={() => handleAddItem(item)} className="p-2 m-2 bg-green-100 rounded-lg cursor-pointer">Add Item</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
