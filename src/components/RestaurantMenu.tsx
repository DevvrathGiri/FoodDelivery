import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Data, ItemCard2 } from "../utils/MenuTypes";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState<Data | null>(null);
  const { resId } = useParams();

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json.data);
    };
    fetchMenu();
  }, [resId]);

  if (resInfo === null) return <Shimmer />;

  // Restaurant info (cards[2])
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  // Menu items (ItemCategory → ItemCard2)
  const itemCards: ItemCard2[] =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card
      ?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item: ItemCard2) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹{(item.card.info.price ?? 0) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
