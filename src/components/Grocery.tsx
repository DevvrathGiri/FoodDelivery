const Grocery = () => {
 const categories = [
  { 
    name: "Fresh Vegetables", 
    img: "https://images.pexels.com/photos/1216348/pexels-photo-1216348.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    name: "Fresh Fruits", 
    img: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    name: "Dairy Products", 
    img: "https://images.pexels.com/photos/7130218/pexels-photo-7130218.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    name: "Snacks & Chips", 
    img: "https://images.pexels.com/photos/4109231/pexels-photo-4109231.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    name: "Bakery Items", 
    img: "https://images.pexels.com/photos/708488/pexels-photo-708488.jpeg?auto=compress&cs=tinysrgb&w=800" 
  },
  { 
    name: "Beverages", 
    img: "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=800" 
  }
];


  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Grocery Store 🛒
      </h1>

      <p className="text-gray-600 text-center text-lg mb-12">
        Get all your essential groceries delivered fresh & fast!
      </p>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search grocery items..."
          className="w-full sm:w-1/2 border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-green-500 outline-none"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md border hover:shadow-lg transition p-4"
          >
            <div className="rounded-lg overflow-hidden mb-4">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-40 object-cover"
              />
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {cat.name}
            </h2>

            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition shadow">
              Explore
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-xl overflow-hidden shadow-xl">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/011/673/632/small_2x/fresh-fruits-and-vegetables-in-reusable-green-shopping-bag-on-wood-table-with-supermarket-grocery-store-blurred-defocused-background-photo.jpg"
          alt="grocery-banner"
          className="w-full h-64 object-cover"
        />
      </div>

    </div>
  );
};

export default Grocery;
