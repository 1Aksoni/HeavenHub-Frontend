// PropertyDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();
  
  // Hardcoded data (you can replace this with your actual data fetching logic)
  const properties = [
    {
      id: '1',
      title: 'Cozy Apartment',
      location: 'New York',
      price: 300000,
      description: 'A cozy apartment in the heart of New York City.',
      image: 'link_to_image_1'
    },
    {
      id: '2',
      title: 'Modern House',
      location: 'Los Angeles',
      price: 800000,
      description: 'A modern house with stunning views in Los Angeles.',
      image: 'link_to_image_2'
    },
    // Add more properties as needed
  ];

  const property = properties.find(prop => prop.id === id);

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="p-4">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover rounded mb-4" />
      <h2 className="font-bold text-2xl">{property.title}</h2>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-blue-800 font-semibold">${property.price.toLocaleString()}</p>
      <p className="mt-4">{property.description}</p>
    </div>
  );
};

export default PropertyDetails;
