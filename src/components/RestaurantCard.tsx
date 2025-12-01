import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import type { RestaurantListItem } from "../utils/MenuTypes";
type RestaurantCardProps = {
  resData: RestaurantListItem;
};

const RestaurantCard = ({ resData }: RestaurantCardProps) => {
  const {
  id,
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwo,
  sla
} = resData?.info ?? {};


  const deliveryTime = sla?.deliveryTime;

  return (
    <Link to={`/RestaurantMenu/${id}`}>
      <div
        className="res-card"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <img
          className="res-logo"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />

        <h3>{name}</h3>
        <h4>{cuisines?.join(", ") ?? "N/A"}</h4>
        <h4>{avgRating} ⭐</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
