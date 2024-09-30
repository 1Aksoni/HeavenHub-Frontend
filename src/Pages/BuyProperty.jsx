// BuyProperty.jsx
import React from "react";
import PropertyCard from "../components/PropertyCard";
import Footer from "../components/Footer";
import Header from "../components/Header";

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Beverly Hills",
    price: 1200000,
    location: "Beverly Hills, CA",
    image: "https://images.unsplash.com/photo-1506126279646-a697353d3166?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG91c2UlMjBleHRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "This luxury villa offers breathtaking views, a private pool, and state-of-the-art amenities. Located in the heart of Beverly Hills, it combines elegance with comfort."
  },
  {
    id: 2,
    title: "Modern Apartment in New York",
    price: 800000,
    location: "New York, NY",
    image: "https://plus.unsplash.com/premium_photo-1661954372617-15780178eb2e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2UlMjBleHRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "A sleek modern apartment situated in downtown New York. Features include floor-to-ceiling windows, high-end appliances, and close proximity to major attractions."
  },
  {
    id: 3,
    title: "Beachfront House in Miami",
    price: 950000,
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBleHRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Enjoy oceanfront living in this stunning Miami beach house. Offers direct beach access, a spacious deck, and panoramic sea views."
  },
  {
    id: 4,
    title: "Country Cottage in Vermont",
    price: 550000,
    location: "Vermont, VT",
    image: "https://plus.unsplash.com/premium_photo-1676657955502-405b78e1e900?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2UlMjBleHRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "A charming country cottage nestled in the serene landscapes of Vermont. Perfect for those seeking a peaceful retreat with rustic charm."
  },
  {
    id: 5,
    title: "Eco-Friendly Cabin in Colorado",
    price: 600000,
    location: "Aspen, CO",
    image: "https://images.unsplash.com/photo-1628625251833-04eeafb7a2db?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlJTIwZXh0ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    description: "An eco-friendly cabin located in the mountains of Aspen. Features sustainable materials, solar panels, and breathtaking mountain views."
  },
  {
    id: 6,
    title: "Penthouse Suite in Chicago",
    price: 1100000,
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1653513023195-e7be0919c8ad?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlJTIwZXh0ZXJpb3J8ZW58MHx8MHx8fDA%3D",
    description: "A luxurious penthouse offering skyline views of Chicago. Includes modern amenities, a private rooftop terrace, and concierge services."
  },
  {
    id: 7,
    title: "Historic Home in Boston",
    price: 750000,
    location: "Boston, MA",
    image: "https://plus.unsplash.com/premium_photo-1661963657305-f52dcaeef418?q=80&w=912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A beautifully preserved historic home in the heart of Boston. Features classic architecture, hardwood floors, and a spacious backyard."
  },
  {
    id: 8,
    title: "Suburban Family Home in Seattle",
    price: 680000,
    location: "Seattle, WA",
    image: "https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    description: "A perfect family home located in a quiet suburb of Seattle. Offers a large garden, modern kitchen, and is close to schools and parks."
  },
];

function BuyProperty() {
  return (
    <div>
      <Header />
      <div className="container mx-auto py-12">
        <h2 className="text-5xl font-bold mb-6 text-center text-blue-800 border-b-4 border-blue-600 pb-2">
          Buy Property
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ml-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BuyProperty;
