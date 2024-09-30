import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PropertyManagement = () => {
  // Sample state for managed properties
  const [rentalProperties, setRentalProperties] = useState([
    {
      id: 1,
      name: "Modern Apartment",
      location: "Downtown, Cityville",
      price: "$1,200/month",
      description: "A beautiful modern apartment in the heart of the city.",
    },
    {
      id: 2,
      name: "Cozy House",
      location: "Suburban Area, Cityville",
      price: "$2,000/month",
      description: "A spacious and cozy house perfect for families.",
    },
    // Add more rental properties as needed
  ]);

  const [buyingProperties, setBuyingProperties] = useState([
    {
      id: 1,
      name: "Luxury Condo",
      location: "Uptown, Cityville",
      price: "$500,000",
      description: "A luxury condo with all the amenities and city views.",
    },
    {
      id: 2,
      name: "Spacious Villa",
      location: "Countryside, Cityville",
      price: "$850,000",
      description: "A beautiful spacious villa with a garden.",
    },
    // Add more buying properties as needed
  ]);

  // Function to delete a rental property
  const handleDeleteRental = (id) => {
    setRentalProperties(
      rentalProperties.filter((property) => property.id !== id)
    );
  };

  // Function to delete a buying property
  const handleDeleteBuying = (id) => {
    setBuyingProperties(
      buyingProperties.filter((property) => property.id !== id)
    );
  };

  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-5xl font-bold mb-6 text-center text-blue-800 border-b-4 border-blue-600 pb-2">
          Property Management
        </h2>

        {/* Section for Rental Properties */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Rental Properties</h2>
          <Link
            to="/api/rent"
            className="flex items-center mb-4 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a1 1 0 011 1v8.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 11.586V3a1 1 0 011-1z" />
            </svg>
            Add New Rental Property
          </Link>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse mb-6">
              <thead>
                <tr>
                  <th className="border-b p-2 text-left">Property Name</th>
                  <th className="border-b p-2 text-left">Location</th>
                  <th className="border-b p-2 text-left">Price</th>
                  <th className="border-b p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rentalProperties.map((property) => (
                  <tr key={property.id} className="border-b">
                    <td className="p-2">{property.name}</td>
                    <td className="p-2">{property.location}</td>
                    <td className="p-2">{property.price}</td>
                    <td className="p-2 flex space-x-2">
                      <Link
                        to={`/api/edit-property/${property.id}`}
                        className="text-yellow-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L12 5.172l-1.586-1.586a2 2 0 00-2.828 0L3.586 7.414A2 2 0 003 8.828V15a2 2 0 002 2h6a2 2 0 002-2V8.828a2 2 0 00-.586-1.414l-1.586-1.586 1.586-1.586a2 2 0 012.828 0l1.414 1.414a2 2 0 010 2.828l-1.586 1.586L17.414 2.586z" />
                        </svg>
                      </Link>
                      <button
                        onClick={() => handleDeleteRental(property.id)}
                        className="text-red-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 3a1 1 0 00-1 1v1H5a1 1 0 000 2h1v9a1 1 0 001 1h8a1 1 0 001-1V7h1a1 1 0 000-2h-4V4a1 1 0 00-1-1h-2z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section for Buying Properties */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Buying Properties</h2>
          <Link
            to="/api/buy" // You may want a different route for adding buying properties
            className="flex items-center mb-4 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 2a1 1 0 011 1v8.586l2.293-2.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 11.586V3a1 1 0 011-1z" />
            </svg>
            Add New Buying Property
          </Link>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="border-b p-2 text-left">Property Name</th>
                  <th className="border-b p-2 text-left">Location</th>
                  <th className="border-b p-2 text-left">Price</th>
                  <th className="border-b p-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {buyingProperties.map((property) => (
                  <tr key={property.id} className="border-b">
                    <td className="p-2">{property.name}</td>
                    <td className="p-2">{property.location}</td>
                    <td className="p-2">{property.price}</td>
                    <td className="p-2 flex space-x-2">
                      <Link
                        to={`/api/edit-property/${property.id}`}
                        className="text-yellow-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L12 5.172l-1.586-1.586a2 2 0 00-2.828 0L3.586 7.414A2 2 0 003 8.828V15a2 2 0 002 2h6a2 2 0 002-2V8.828a2 2 0 00-.586-1.414l-1.586-1.586 1.586-1.586a2 2 0 012.828 0l1.414 1.414a2 2 0 010 2.828l-1.586 1.586L17.414 2.586z" />
                        </svg>
                      </Link>
                      <button
                        onClick={() => handleDeleteBuying(property.id)}
                        className="text-red-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M10 3a1 1 0 00-1 1v1H5a1 1 0 000 2h1v9a1 1 0 001 1h8a1 1 0 001-1V7h1a1 1 0 000-2h-4V4a1 1 0 00-1-1h-2z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyManagement;
