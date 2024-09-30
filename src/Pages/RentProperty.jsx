"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
// Sample Data Can be fatched by the Database using fetch
const rentalProperties = [
  {
    id: 1,
    name: "Modern Apartment",
    location: "Downtown, Cityville",
    price: "$1,200/month",
    description: "A beautiful modern apartment in the heart of the city.",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    name: "Cozy House",
    location: "Suburban Area, Cityville",
    price: "$2,000/month",
    description: "A spacious and cozy house perfect for families.",
    image: "https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdXNlfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    name: "Luxury Condo",
    location: "Uptown, Cityville",
    price: "$3,500/month",
    description: "A luxury condo with all the amenities and city views.",
    image: "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdXNlfGVufDB8fDB8fHww",
  },
  {
    id: 4,
    name: "Charming Cottage",
    location: "Countryside, Cityville",
    price: "$1,800/month",
    description:
      "A quaint cottage surrounded by nature, perfect for a peaceful retreat.",
    image: "https://images.unsplash.com/photo-1481018085669-2bc6e4f00eed?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    name: "Spacious Townhouse",
    location: "East Side, Cityville",
    price: "$2,400/month",
    description: "A modern townhouse with three bedrooms and a backyard.",
    image: "https://images.unsplash.com/photo-1444676632488-26a136c45b9b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww",
  },
  {
    id: 6,
    name: "Penthouse Suite",
    location: "Skyline, Cityville",
    price: "$5,000/month",
    description:
      "An upscale penthouse with breathtaking views and luxurious finishes.",
    image: "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 7,
    name: "Family-Friendly Apartment",
    location: "West End, Cityville",
    price: "$2,200/month",
    description: "A spacious apartment with kid-friendly amenities.",
    image: "https://images.unsplash.com/photo-1434082033009-b81d41d32e1c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG91c2V8ZW58MHx8MHx8fDA%3DzZ",
  },
  {
    id: 8,
    name: "Stylish Studio",
    location: "Central, Cityville",
    price: "$1,000/month",
    description:
      "A compact studio apartment with a modern design, ideal for singles.",
    image: "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 9,
    name: "Elegant Villa",
    location: "Lakeside, Cityville",
    price: "$4,000/month",
    description: "A beautiful villa with lake views and luxurious amenities.",
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D ",
  },
  {
    id: 10,
    name: "Industrial Loft",
    location: "Arts District, Cityville",
    price: "$2,800/month",
    description:
      "An expansive loft with an industrial design, perfect for artists.",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2V8ZW58MHx8MHx8fDA%3D",
  },
];

function RentProperty() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch rental properties from API (for now using static data)
    setProperties(rentalProperties);
  }, []);
  const handleViewDetails = (property) => {
    alert(
      `Property: ${property.title}\n\nDescription: ${property.description}\n\nPrice: $${property.price.toLocaleString()}`
    );
  };
  return (
    <div>
      <Header />
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto py-10 px-4">
         
          
        <h2 className="text-5xl font-bold mb-6 text-center text-blue-800 border-b-4 border-blue-600 pb-2">
        Properties For Rent
        </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    {property.name}
                  </h2>
                  <p className="text-gray-600">{property.location}</p>
                  <p className="text-gray-700 mt-2">{property.description}</p>
                  <p className="text-indigo-600 font-semibold mt-2">
                    {property.price}
                  </p>
                  <button
                  className="mt-2 bg-blue-600 text-white p-2 rounded"
                  onClick={() => handleViewDetails(property)} // Trigger alert with property details
                >
                  View Details
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RentProperty;
