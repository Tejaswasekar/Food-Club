import { CDN_IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

let RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, costForTwo, deliveryTime, id } =
    resData?.info;

  return (
    <Link to={`/restaurant/${id}`} className="no-underline text-inherit">
      <div className="m-4 p-4 w-62.5 bg-purple-100 rounded-lg hover:bg-purple-200 hover:shadow-lg ">
        <img className="rounded-lg" src={CDN_IMAGE_URL + cloudinaryImageId} />
        <h3 className="font-extrabold py-4 text-lg">{name}</h3>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}</h4>
      </div>
    </Link>
  );
};

// HIgher Order Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 m-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
