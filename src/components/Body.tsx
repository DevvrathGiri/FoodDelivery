import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerDiv from "./Shimmer";
import type { Restaurant } from "../utils/MenuTypes";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  // ✅ Stores full restaurant list (original data)
  const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);

  // ✅ Stores searched/filtered restaurant list displayed on UI
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(
    []
  );

  // ✅ Stores search input field value
  const [searchText, setSearchText] = useState("");

  // ✅ Runs only once on component mount — fetches data from API
  useEffect(() => {
    const fetchData = async () => {
      // ✅ Fetch Swiggy restaurants API
      const data = await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json(); // ✅ Convert response to JSON
      // console.log(json.data.cards);

      // ✅ Extract only restaurant info objects from response

      // ✅ Store restaurants in state
      setAllRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      ); // full list
      setFilteredRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      ); // UI list
    };

    fetchData(); // ✅ Execute API call
  }, []); // ✅ Empty dependency → runs only once
 const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) 
    return (
    <h1>Oops! looks like you are offline</h1>
    );
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
        {/* {console.log(filteredRestaurants)} */}
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
