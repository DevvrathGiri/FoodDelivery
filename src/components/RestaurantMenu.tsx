import { useParams } from "react-router-dom";
import type { ItemCard2 } from "../utils/MenuTypes";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState<number | null>(null);

  if (resInfo === null) return <Shimmer />;

  // Restaurant info (cards[2])
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  // Menu items categories
  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Restaurant header */}
        <section className="mb-8 rounded-2xl bg-white shadow-sm border border-gray-100 p-6 flex flex-col gap-2">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {name}
          </h1>
          <p className="text-sm text-gray-600">
            {cuisines?.join(", ")} • {costForTwoMessage}
          </p>
        </section>

        {/* Categories accordion */}
        <section className="space-y-4">
          {categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card.title}
              data={category?.card?.card}
              showItems={index === showIndex}
              setShowIndex={() => setShowIndex(index)}
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default RestaurantMenu;
