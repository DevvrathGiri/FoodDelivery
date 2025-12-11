// Body.tsx
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerDiv from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  type ApiRestaurant = {
    info: {
      id: string;
      name: string;
      cuisines: string[];
      cloudinaryImageId?: string;
      avgRating?: number | string;
      costForTwo: number;
      sla?: { deliveryTime?: number };
    };
  };

  const [allRestaurants, setAllRestaurants] = useState<ApiRestaurant[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<ApiRestaurant[]>([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true); // ⭐ NEW

  // FETCH RESTAURANTS
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        // Find correct card
        const resCard = json?.data?.cards?.find(
          (c: any) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        let restaurants = resCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        restaurants = Array.isArray(restaurants) ? restaurants : [];

        setAllRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      } catch (err) {
        console.error(err);
      }

      setLoading(false); // ⭐ STOP shimmer
    };

    fetchData();
  }, []);

  // CHECK ONLINE STATUS
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1 className="text-center mt-10 text-xl font-semibold text-red-600">
        You are offline ❌
      </h1>
    );
  }

  // ⭐ SHOW SHIMMER AS FULL BODY PAGE
  if (loading) {
    return (
      <main className="bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <ShimmerDiv />  {/* ⭐ Shimmer now fills the Body layout */}
        </div>
      </main>
    );
  }

  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* SEARCH + FILTER SECTION */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 items-center justify-between">
          <div className="flex w-full sm:w-auto gap-3">

            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-72 bg-white shadow-sm 
                         focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              placeholder="Search restaurants..."
              value={searchText}
              onChange={(e) => {
                const value = e.target.value;
                setSearchText(value);
                if (value === "") setFilteredRestaurants(allRestaurants);
              }}
            />

            <button
              className="whitespace-nowrap bg-blue-600 text-white px-4 py-2 rounded-lg shadow-sm 
                         hover:bg-blue-700 active:scale-[0.98] transition-all text-sm"
              onClick={() => {
                const filtered = allRestaurants.filter((res) =>
                  res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilteredRestaurants(filtered);
              }}
            >
              Search
            </button>
          </div>

          <button
            className="w-full sm:w-auto bg-green-600 text-white px-4 py-2 rounded-lg shadow-sm 
                       hover:bg-green-700 active:scale-[0.98] transition-all text-sm"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Body;
