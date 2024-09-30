// PropertyCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover rounded mb-4" />
      <h3 className="font-bold text-lg">{property.title}</h3>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-blue-800 font-semibold">${property.price.toLocaleString()}</p>
      <div className="mt-4 flex justify-between">
        <Link to={`/property/${property.id}`} className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          View Details
        </Link>
        <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
