import { useState } from "react";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show popup
    setShowPopup(true);

    // Hide popup after 2 sec
    setTimeout(() => setShowPopup(false), 2000);

    // Clear input fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">

      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-3 rounded-xl shadow-xl animate-bounce">
          Message sent! We’ll contact you soon 😊
        </div>
      )}

      <h1 className="text-4xl font-extrabold text-gray-800 mb-6 text-center">
        Contact Us
      </h1>

      <p className="text-center text-gray-600 mb-10 text-lg">
        Have a question, feedback, or need assistance? We're here to help!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Contact Details */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>

          <div className="space-y-3 text-gray-700">
            <p>
              📍 <span className="font-semibold">The Grill Restaurant</span><br />
              Maharaja Agrasen Canteen, Rohini, Delhi
            </p>

            <p>📞 <span className="font-semibold">Phone:</span> 8448804167</p>
            <p>✉️ <span className="font-semibold">Email:</span> support@devgmail.com</p>
            <p>🕒 <span className="font-semibold">Working Hours:</span> Mon–Sun : 10 AM – 11 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-md border">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition shadow"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Delhi Rohini Map */}
      <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
      <iframe
  title="MAIT Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.393233152315!2d77.06351587502488!3d28.719705775643103!2m3!1f0!2f0!3f0!
3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d068dbf44ecd7%3A0xc4ce5551f8ac8360!
2sMaharaja%20Agrasen%20Institute%20Of%20Technology(MAIT)!5e0!3m2!1sen!2sin!4v1707600000000!5m2!1sen!2sin"
  width="100%"
  height="300"
  loading="lazy"
  allowFullScreen=""
  className="border-0 w-full"
></iframe>

      </div>

    </div>
  );
};

export default Contact;
