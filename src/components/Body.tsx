import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerDiv from "./Shimmer";
import type { Restaurant } from "../utils/MenuTypes";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(
    []
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setAllRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    };

    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1 className="text-center mt-10 text-xl font-semibold text-red-600">
        Oops! Looks like you are offline ❌
      </h1>
    );

  if (allRestaurants.length === 0) return <ShimmerDiv />;

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* SEARCH + FILTER SECTION */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 items-center">
        <input
          type="text"
          className="
            border border-gray-300 rounded-lg px-4 py-2 
            w-full sm:w-1/2 
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => {
            const value = e.target.value;
            setSearchText(value);

            if (value === "") setFilteredRestaurants(allRestaurants);
          }}
        />

     <button
  className="
    bg-blue-600 text-white px-4 py-2 rounded-lg 
    hover:bg-blue-700 transition
  "
  onClick={() => {
    const filtered = allRestaurants.filter((res) =>
      res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  }}
>
  Search
</button>


      <button
  className="
    bg-green-600 text-white px-4 py-2 rounded-lg 
    hover:bg-green-700 transition
  "
  onClick={() => {
    const filtered = allRestaurants.filter(
      (res) => Number(res?.info?.avgRating) > 4.3
    );
    setFilteredRestaurants(filtered);
  }}
>
  Top Rated ⭐
</button>

      </div>

      {/* RESTAURANTS GRID */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          gap-6
        "
      >
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
