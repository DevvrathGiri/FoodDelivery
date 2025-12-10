const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">

      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        About Us
      </h1>

      {/* Intro Section */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-10">
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to <span className="font-semibold text-blue-600">The Grill</span>,
          your go-to destination for delicious meals crafted with love, passion,
          and authentic flavors. Whether it's a quick bite, a family dinner, or
          a celebration, we bring you the perfect fusion of taste and comfort.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50 p-6 rounded-xl shadow-sm border mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          At The Grill, our mission is simple — 
          <span className="font-semibold"> serve fresh, high-quality food</span> that
          leaves you smiling every single time. We source premium ingredients,
          handpick our recipes, and ensure every dish tells a story.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>

        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Freshly prepared meals using premium ingredients</li>
          <li>Authentic recipes inspired by global and local cuisine</li>
          <li>Fast delivery & easy ordering experience</li>
          <li>Excellent customer support and dedicated service</li>
          <li>Hygienic kitchen and top-notch quality standards</li>
        </ul>
      </div>

      {/* Image Banner */}
      <div className="rounded-xl overflow-hidden shadow-lg mb-10">
       <img
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
          alt="restaurant"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Closing Note */}
      <div className="text-center">
        <p className="text-lg text-gray-700 font-medium">
          Thank you for choosing <span className="text-blue-600">The Grill</span>.  
          We are delighted to serve you!
        </p>
      </div>

    </div>
  );
};

export default About;
