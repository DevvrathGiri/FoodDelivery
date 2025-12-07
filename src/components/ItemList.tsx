import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div className="flex flex-col gap-3 py-3">
      {items?.map((item) => {
        const info = item?.card?.info;

        return (
          <div
            key={info?.id}
            className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex gap-4">
              {/* Dish Image */}
              <img
                src={CDN_URL + info?.imageId}
                alt={info?.name}
                className="w-20 h-20 object-cover rounded-lg"
              />

              {/* Text Content */}
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-base font-semibold text-gray-900">
                    {info?.name}
                  </span>

                  <span className="text-sm font-semibold text-green-600">
                    ₹{(info?.price || info?.defaultPrice || 0) / 100}
                  </span>
                </div>

                <p className="mt-1 text-sm text-gray-600 leading-snug">
                  {info?.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
