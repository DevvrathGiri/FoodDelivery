const ShimmerDiv = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 animate-pulse">
      {Array(9)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md p-4 border border-gray-200"
          >
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-4"></div>

            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerDiv;
  