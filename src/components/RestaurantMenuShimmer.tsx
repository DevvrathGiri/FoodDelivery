const RestaurantMenuShimmer = () => {
  return (
    <div className="animate-pulse">

      {/* Restaurant Header Shimmer */}
      <div className="bg-white shadow-sm border rounded-2xl p-6 mb-8">
        <div className="h-6 bg-gray-300 rounded w-1/3 mb-3"></div>
        <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      </div>

      {/* Category Shimmer */}
      <div className="space-y-4">
        
        {Array(4).fill(0).map((_, i) => (
          <div 
            key={i}
            className="bg-white rounded-xl shadow-sm border p-4"
          >
            {/* Category Title */}
            <div className="h-5 bg-gray-300 rounded w-1/4 mb-4"></div>

            {/* Menu Item Shimmers */}
            <div className="space-y-4">
              {[1, 2].map((j) => (
                <div 
                  key={j}
                  className="flex justify-between items-start gap-4"
                >
                  {/* Left content */}
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                  </div>

                  {/* Image shimmer */}
                  <div className="w-24 h-20 bg-gray-300 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default RestaurantMenuShimmer;
