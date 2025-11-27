import { CDN_IMAGE_URL } from "../utils/constants";

let RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, costForTwo, deliveryTime } =
    resData?.info;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={CDN_IMAGE_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export default RestaurantCard;
