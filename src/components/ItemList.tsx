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
            <div className="flex justify-between items-start gap-4">
              
              {/* LEFT SIDE — TEXT */}
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

              {/* RIGHT SIDE — IMAGE + BUTTON */}
              <div className="relative">
                
                <img
                  src={CDN_URL + info?.imageId}
                  alt={info?.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                {/* Button positioned on image */}
                <button
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-black text-white shadow-lg text-xs"
                >
                  Add+
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
