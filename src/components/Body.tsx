import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
const Body = () => {
  const [ListOfrestaurants, SetListOfRestaurant] = useState(resList);
  return (
    <div className="body">
      <div className="Filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterlist = ListOfrestaurants.filter(
              (res) => Number(res.data.avgRating) > 4
            );
            SetListOfRestaurant(filterlist);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {ListOfrestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
