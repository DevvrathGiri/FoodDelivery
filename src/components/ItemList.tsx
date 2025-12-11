import { useDispatch } from "react-redux";
import { addItem, increaseQty, decreaseQty } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";

type ItemListProps = {
  items: any[];
  isCart?: boolean;
};

const ItemList = ({ items, isCart }: ItemListProps) => {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({}); // ⭐ NEW

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const fallbackImage =
    "https://i.pinimg.com/originals/e6/f7/ca/e6f7ca8399612f1a44f3a652ae5e0d28.jpg";

  const handleAddItem = (item: any) => {
    const info = item?.card?.info || item;

    dispatch(addItem(item));

    setAddedItems((prev) => ({
      ...prev,
      [info?.id]: true,
    }));
  };

  return (
    <div className="flex flex-col gap-4 py-3">
      {items?.map((item, index) => {
        const info = item?.card?.info || item;
        const isAdded = addedItems[info?.id];

        const imageUrl = info?.imageId
          ? CDN_URL + info.imageId
          : fallbackImage;

        return (
          <div
            key={info?.id || index}
            className="
              bg-white border border-gray-200 rounded-xl p-4 
              shadow-sm hover:shadow-md transition-all
              flex flex-col gap-4
              md:flex-row md:justify-between md:items-start
            "
          >
            {/* LEFT SECTION */}
            <div className="flex-1 md:pr-6">
              <div className="flex justify-between items-center md:items-start">
                <span className="text-base font-semibold">{info?.name}</span>

                <span className="hidden md:block text-lg font-bold text-green-700">
                  ₹{(info?.price || info?.defaultPrice || 0) / 100}
                </span>
              </div>

              {/* ⭐ DESC WITH EXPAND/COLLAPSE */}
              <div className="mt-1 text-sm text-gray-600">
                <p
                  className={`${
                    expandedItems[info.id] ? "line-clamp-none" : "line-clamp-2"
                  }`}
                >
                  {info?.description}
                </p>

                {/* Show more/less only when description is long */}
                {info?.description && info.description.length > 80 && (
                  <button
                    onClick={() => toggleExpand(info.id)}
                    className="text-green-600 font-semibold mt-1 cursor-pointer"
                  >
                    {expandedItems[info.id] ? "Show less" : " Show more"}
                  </button>
                )}
              </div>

              {/* Mobile price */}
              <span className="md:hidden mt-2 text-green-700 font-semibold">
                ₹{(info?.price || info?.defaultPrice || 0) / 100}
              </span>
            </div>

            {/* RIGHT SECTION */}
            <div className="relative flex flex-col items-center md:items-end">

              <img
                src={imageUrl}
                alt={info?.name}
                className="
                  w-28 h-24 object-cover rounded-xl shadow-sm
                  md:w-32 md:h-28
                "
              />

              {/* ⭐ CART PAGE → quantity controls */}
              {isCart ? (
                <div className="mt-2 flex items-center gap-6 px-4 py-1 border border-green-600 rounded-lg shadow cursor-pointer">

                  <button
                    className="text-xl font-bold text-green-600 cursor-pointer"
                    onClick={() => dispatch(decreaseQty(info.id))}
                  >
                    −
                  </button>

                  <span className="text-green-700 font-semibold text-lg cursor-pointer">
                    {info.quantity}
                  </span>

                  <button
                    className="text-xl font-bold text-green-600 cursor-pointer"
                    onClick={() => dispatch(increaseQty(info.id))}
                  >
                    +
                  </button>
                </div>
              ) : (
                // ⭐ MENU PAGE → ADD BUTTON
                <button
                  className={`
                    mt-2 w-24 h-9 rounded-lg text-sm font-semibold
                    border border-green-600 flex items-center justify-center 
                    transition-all duration-200 cursor-pointer
                    ${isAdded ? "bg-green-600 text-white" : "bg-white text-green-600"}
                  `}
                  onClick={() => handleAddItem(item)}
                  disabled={isAdded}
                >
                  {isAdded ? "ADDED ✓" : "ADD"}
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
