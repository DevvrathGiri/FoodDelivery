import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerDiv from "./Shimmer";
export interface Restaurant {
  id: string;
  name: string;
  cloudinaryImageId?: string;
  cuisines: string[];
  avgRating?: number | string;
  costForTwo: number;
  sla?: {
    deliveryTime?: number;
  };
}
interface CardWrapper {
  card?: {
    card?: {
      "@type"?: string;
      info?: Restaurant;
    };
  };
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);
  const [ListOfrestaurants, SetListOfRestaurant] = useState<Restaurant[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );

      const json = await data.json();

      const restaurants = (json.data.cards as CardWrapper[])
        .filter((c) => c.card?.card?.["@type"]?.includes("Restaurant"))
        .map((c) => c.card?.card?.info)
        .filter((info): info is Restaurant => info !== undefined);

      // IMPORTANT: set the extracted restaurants here
      setAllRestaurants(restaurants); // full list
      SetListOfRestaurant(restaurants); // UI list
    };

    fetchData();
  }, []);

if(ListOfrestaurants.length === 0)
{
  return <ShimmerDiv/>
}
  return (
    <div className="body">
      <div className="Filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterlist = allRestaurants.filter(
              (res) => Number(res.avgRating) > 4.3
            );
            SetListOfRestaurant(filterlist);
          }}
        >
          Top rated restaurants
        </button>
      </div>

      <div className="res-container">
        {ListOfrestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
