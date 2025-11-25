import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerDiv from "./Shimmer";

// ✅ Defining the Restaurant data structure coming from API
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

// ✅ Type for card wrapper structure returned by Swiggy API
interface CardWrapper {
  card?: {
    card?: {
      "@type"?: string;
      info?: Restaurant;
    };
  };
}

const Body = () => {
  // ✅ Stores full restaurant list (original data)
  const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);

  // ✅ Stores searched/filtered restaurant list displayed on UI
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);

  // ✅ Stores search input field value
  const [searchText, setSearchText] = useState("");

  // ✅ Runs only once on component mount — fetches data from API
  useEffect(() => {
    const fetchData = async () => {
      // ✅ Fetch Swiggy restaurants API
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&collection=83633&tags=layout_CCS_NorthIndian&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
      );

      const json = await data.json(); // ✅ Convert response to JSON

      // ✅ Extract only restaurant info objects from response
      const restaurants = (json.data.cards as CardWrapper[])
        .filter((c) => c.card?.card?.["@type"]?.includes("Restaurant"))
        .map((c) => c.card?.card?.info)
        .filter((info): info is Restaurant => info !== undefined); // ✅ Ensures TypeScript type safety

      // ✅ Store restaurants in state
      setAllRestaurants(restaurants); // full list
      setFilteredRestaurants(restaurants); // UI list
    };

    fetchData(); // ✅ Execute API call
  }, []); // ✅ Empty dependency → runs only once

  // ✅ Show shimmer (loading UI) while restaurants are being fetched
  if (allRestaurants.length === 0) return <ShimmerDiv />;

  return (
    <div className="body">
      <div className="Filter">
        {/* ✅ Controlled input field for search */}
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            const value = e.target.value;
            setSearchText(value); // ✅ Update search state

            // ✅ Reset list if search box becomes empty
            if (value === "") {
              setFilteredRestaurants(allRestaurants);
            }
          }}
        />

        {/* ✅ Search button — filters based on restaurant name */}
        <button
          onClick={() => {
            const filtered = allRestaurants.filter((res) =>
              res.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Search
        </button>

        {/* ✅ Top-rated filter — shows restaurants above 4.3 rating */}
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = allRestaurants.filter(
              (res) => Number(res.avgRating) > 4.3
            );
            setFilteredRestaurants(filtered);
          }}
        >
          Top rated restaurants
        </button>
      </div>

      {/* ✅ Rendering restaurant cards on UI */}
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;