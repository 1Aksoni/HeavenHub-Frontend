import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel"; // Import the Carousel component
// import { Link } from "react-router-dom"; // Import Link for routing

function Home() {
 
  // State to store demo property data
  const [properties, setProperties] = useState([]);
  const fallbackImageUrl = "https://via.placeholder.com/800"; // Fallback image URL
  const [loading, setLoading] = useState(true); // Loading state for data fetch

  // Array for carousel slides
  const slides = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop&q=80",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&h=900&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1600&h=900&fit=crop&q=80",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&h=900&fit=crop&q=80",
  ];

  const handleViewDetails = (property) => {
    alert(
      `Property: ${property.title}\n\nDescription: ${
        property.description
      }\n\nPrice: $${property.price.toLocaleString()}`
    );
  };

  // Fetch data from the backend when the component mounts
  useEffect(() => {
    fetch("/api/v1/homedata") // Replace with your actual API URL
      .then((response) => response.json())
      .then((data) => {
        setProperties(data);
        setLoading(false); // Set loading to false once the data is fetched
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
        setLoading(false); // Set loading to false if there's an error
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading message while data is being fetched
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Header />

        {/* Carousel Section */}
        <Carousel slides={slides} />

        <main className="flex-grow p-4">
          <h2 className="text-5xl font-bold mb-6 text-center text-blue-800 border-b-4 border-blue-600 pb-2">
            Discover Your Dream Property
          </h2>

          {/* Display property data from demo array */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {properties.map((property) => (
              <div key={property._id} className="bg-white p-4 rounded shadow">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover rounded"
                  onError={(e) => {
                    e.target.src = fallbackImageUrl;
                  }} // Fallback image on error
                />
                <h3 className="font-bold mt-2">{property.title}</h3>
                <p className="text-gray-600">{property.description}</p>
                <button
                  className="mt-2 bg-blue-600 text-white p-2 rounded"
                  onClick={() => handleViewDetails(property)} // Trigger alert with property details
                >
                  View Details
                </button>
              </div>
            ))}
          </section>
        </main>

        <footer className="bg-blue-600 p-4">
          <p className="text-white text-center">
            © 2024 HavenHub. All rights reserved.
          </p>
        </footer>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
