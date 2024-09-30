import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Sample properties data
const properties = [
  {
    id: 1,
    name: "Modern Apartment",
    location: "Downtown, Cityville",
    price: "$1,200/month",
    description: "A beautiful modern apartment in the heart of the city.",
    image: "https://images.unsplash.com/photo-1611602132416-da2045990f76?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Cozy House",
    location: "Suburban Area, Cityville",
    price: "$2,000/month",
    description: "A spacious and cozy house perfect for families.",
    image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Luxury Condo",
    location: "Uptown, Cityville",
    price: "$3,500/month",
    description: "A luxury condo with all the amenities and city views.",
    image: "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Charming Bungalow",
    location: "Lakeside, Cityville",
    price: "$1,800/month",
    description: "A charming bungalow with a beautiful lake view.",
    image: "https://images.unsplash.com/photo-1611602132416-da2045990f76?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdXNlfGVufDB8fDB8fHww",
  },
  {
    id: 5,
    name: "Spacious Townhouse",
    location: "Greenwood, Cityville",
    price: "$2,300/month",
    description: "A spacious townhouse in a family-friendly neighborhood.",
    image: "https://plus.unsplash.com/premium_photo-1661876449499-26de7959878f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdXNlfGVufDB8fDB8fHww",
  },
  {
    id: 6,
    name: "Stylish Studio",
    location: "Midtown, Cityville",
    price: "$900/month",
    description: "A stylish studio apartment perfect for young professionals.",
    image: "https://images.unsplash.com/photo-1501635238895-63f29cfc06b3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlfGVufDB8fDB8fHww",
  },
  {
    id: 7,
    name: "Elegant Villa",
    location: "Hillside, Cityville",
    price: "$4,000/month",
    description: "An elegant villa with a swimming pool and garden.",
    image: "https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 8,
    name: "Family-Friendly Duplex",
    location: "Maplewood, Cityville",
    price: "$2,500/month",
    description: "A family-friendly duplex with ample space for kids.",
    image: "https://images.unsplash.com/photo-1465301055284-72f355cfd745?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdXNlfGVufDB8fDB8fHww",
  },
  {
    id: 9,
    name: "Urban Loft",
    location: "Downtown, Cityville",
    price: "$2,800/month",
    description: "An urban loft with a modern design and open floor plan.",
    image: "https://images.unsplash.com/photo-1501635238895-63f29cfc06b3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdXNlfGVufDB8fDB8fHww",
  },
  {
    id: 10,
    name: "Sunny Penthouse",
    location: "Skyline, Cityville",
    price: "$5,500/month",
    description: "A sunny penthouse with panoramic city views.",
    image: "https://images.unsplash.com/photo-1465301055284-72f355cfd745?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdXNlfGVufDB8fDB8fHww",
  },
  // Add more properties as needed
];

const ListingPage = () => {
  const [sortOrder, setSortOrder] = useState("asc"); // Default sort order
  const [filter, setFilter] = useState("");

  // Function to sort properties by price
  const sortedProperties = [...properties].sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
    const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
    return sortOrder === "asc" ? priceA - priceB : priceB - priceA;
  });

  // Function to filter properties
  const filteredProperties = sortedProperties.filter((property) =>
    property.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setFilter(event.target.value);
  };
  const handleViewDetails = (property) => {
    alert(
      `Property: ${property.title}\n\nDescription: ${property.description}\n\nPrice: $${property.price.toLocaleString()}`
    );
  };
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-5xl font-bold mb-6 text-center text-blue-800 border-b-4 border-blue-600 pb-2">
          Browse Our Properties
        </h2>

        {/* Search Bar with Button */}
        <div className="mb-4 md:w-96 mx-auto">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              value={filter}
              onChange={handleSearchChange} // Update search input
            />

            {/* Search button */}
            <button
              className="relative z-[2] rounded-r border-2 border-primary px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              type="button"
              id="button-addon3"
              onClick={() => console.log("Search clicked!")} // Placeholder for search functionality
            >
              Search
            </button>
          </div>
        </div>

        <div className="flex justify-between mb-4">
          <div className="flex items-center">
            <button
              onClick={() => setSortOrder("asc")}
              className={`p-2 border rounded-md ${
                sortOrder === "asc" ? "bg-gray-200" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
            <button
              onClick={() => setSortOrder("desc")}
              className={`p-2 border rounded-md ${
                sortOrder === "desc" ? "bg-gray-200" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 20V4m8 8H4"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <div
              key={property.id}
              className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{property.name}</h2>
                <p className="text-gray-600">{property.location}</p>
                <p className="text-gray-800 font-semibold">{property.price}</p>
                <p className="mt-2 text-gray-500">{property.description}</p>
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
      <Footer />
    </div>
  );
};

export default ListingPage;
