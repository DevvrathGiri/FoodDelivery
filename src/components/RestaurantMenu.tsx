import { useParams } from "react-router-dom";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer"; // ⭐ NEW SHIMMER
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo: any = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState<number | null>(null);

  // ⭐ MENU-SPECIFIC SHIMMER
  if (!resInfo) {
    return (
      <main className="bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <RestaurantMenuShimmer />  
        </div>
      </main>
    );
  }

  // RESTAURANT INFO
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  // CATEGORY LIST
  const categories: any[] =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c: any) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) ?? [];

  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-8">

        {/* RESTAURANT HEADER */}
        <section className="mb-8 bg-white shadow-sm border rounded-2xl p-6">
          <h1 className="text-2xl font-bold">{name}</h1>
          <p className="text-sm text-gray-600">
            {cuisines?.join(", ")} • {costForTwoMessage}
          </p>
        </section>

        {/* CATEGORY ACCORDIONS */}
        <section className="space-y-4">
        {categories.map((category: any, index: number) => (
  <RestaurantCategory
    key={category?.card?.card?.title || index}
    data={category?.card?.card}
    showItems={showIndex === index}
    setShowIndex={() => 
      setShowIndex(showIndex === index ? null : index) // ⭐ TOGGLE LOGIC
    }
  />
))}

        </section>

      </div>
    </main>
  );
};

export default RestaurantMenu;
