import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";

type ItemListProps = {
  items: any[]; // You can refine later
};

const ItemList = ({ items }: ItemListProps) => {
  const dispatch = useDispatch();

  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const handleAddItem = (item: any) => {
    const info = item?.card?.info || item;

    dispatch(addItem(item));

    setAddedItems((prev) => ({
      ...prev,
      [info?.id]: true,
    }));
  };

  return (
    <div className="flex flex-col gap-3 py-3">
      {items?.map((item, index) => {
        const info = item?.card?.info || item;
        const isAdded = addedItems[info?.id];

        return (
          <div
            key={info?.id || index}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex justify-between items-start gap-4">
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-base font-semibold">{info?.name}</span>
                  <span className="text-sm font-semibold text-green-600">
                    ₹{(info?.price || info?.defaultPrice || 0) / 100}
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-600">{info?.description}</p>
              </div>

              <div className="relative">
                {info?.imageId && (
                  <img
                    src={CDN_URL + info.imageId}
                    alt={info?.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                )}

                <button
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg shadow-lg text-xs ${
                    isAdded ? "bg-green-600" : "bg-black"
                  } text-white`}
                  onClick={() => handleAddItem(item)}
                  disabled={isAdded}
                >
                  {isAdded ? "Added ✓" : "Add+"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
