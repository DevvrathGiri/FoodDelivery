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
        className="
          bg-white 
          rounded-xl 
          shadow-md 
          p-4 
          hover:shadow-xl 
          hover:scale-[1.02] 
          transition 
          duration-200 
          cursor-pointer
        "
      >
        {/* IMAGE */}
        <img
          className="w-full h-40 object-cover rounded-lg mb-3"
          src={CDN_URL + cloudinaryImageId}
          alt={name}
        />

        {/* RESTAURANT NAME */}
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {name}
        </h3>

        {/* CUISINES */}
        <h4 className="text-sm text-gray-500 truncate">
          {cuisines?.join(", ") ?? "N/A"}
        </h4>

        {/* RATINGS */}
        <div className="flex items-center justify-between mt-2 text-sm text-gray-700">
          <span className="font-medium">
            ⭐ {avgRating || "N/A"}
          </span>

          <span>₹{(costForTwo || 0) / 100} FOR TWO</span>
        </div>

        {/* DELIVERY TIME */}
        <h4 className="text-sm mt-1 text-gray-600">
          {deliveryTime ?? "--"} mins
        </h4>
      </div>
    </Link>
  );
};

export default RestaurantCard;
