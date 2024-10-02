import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel"; // Import the Carousel component
import { Link } from "react-router-dom"; // Import Link for routing

function Home() {
  // Demo property data to replace API fetch
  const demoProperties = [
    {
      _id: "1",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
      title: "Luxury Villa in Beverly Hills",
      description: "A luxurious villa located in the heart of Beverly Hills.",
      price: 2500000,
    },
    {
      _id: "2",
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
      title: "Cozy Cottage in the Countryside",
      description: "A charming cottage surrounded by beautiful nature.",
      price: 650000,
    },
    {
      _id: "3",
      image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=800",
      title: "Modern Apartment in New York City",
      description: "A sleek and modern apartment in the center of the city.",
      price: 1200000,
    },
    {
      _id: "4",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
      title: "Beachfront Bungalow in Malibu",
      description: "A beautiful beachfront bungalow with stunning views.",
      price: 1800000,
    },
    {
      _id: "5",
      image: "https://images.unsplash.com/photo-1617887020634-9a7e2bb2910c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxNdjFoWGt6U1h6Y3x8ZW58MHx8fHx8",
      title: "Charming Townhouse in Paris",
      description: "A quaint townhouse with a view of the Eiffel Tower.",
      price: 950000,
    },
    {
      _id: "6",
      image: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Spacious Loft in San Francisco",
      description: "An open loft with breathtaking views of the bay.",
      price: 1350000,
    },
    {
      _id: "7",
      image: "https://images.unsplash.com/photo-1696846911651-a2a51e13d0d9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OXxNdjFoWGt6U1h6Y3x8ZW58MHx8fHx8",
      title: "Contemporary Home in Austin",
      description: "A stylish home in the vibrant city of Austin.",
      price: 780000,
    },
    {
      _id: "8",
      image: "https://images.unsplash.com/photo-1701422052265-64f0ac28dcd6?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8TXYxaFhrelNYemN8fGVufDB8fHx8fA%3D%3D",
      title: "Elegant Flat in London",
      description: "A luxurious flat with modern amenities in the heart of London.",
      price: 1200000,
    },
    {
      _id: "9",
      image: "https://images.unsplash.com/photo-1593398395073-ae53c3870037?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8TXYxaFhrelNYemN8fGVufDB8fHx8fA%3D%3D",
      title: "Sunny Apartment in Barcelona",
      description: "A bright and airy apartment near the beach.",
      price: 720000,
    },
    {
      _id: "10",
      image: "https://images.unsplash.com/photo-1622900383479-1ffda64fcf5e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTN8TXYxaFhrelNYemN8fGVufDB8fHx8fA%3D%3D",
      title: "Rustic Cabin in the Woods",
      description: "A serene cabin perfect for a getaway in the woods.",
      price: 300000,
    },
    {
      _id: "11",
      image: "https://images.unsplash.com/photo-1593398395073-ae53c3870037?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8TXYxaFhrelNYemN8fGVufDB8fHx8fA%3D%3D",
      title: "Modern Condo in Miami",
      description: "A contemporary condo with ocean views in Miami.",
      price: 1100000,
    },
    {
      _id: "12",
      image: "https://images.unsplash.com/photo-1647579350413-a6ada4e480ed?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTR8TXYxaFhrelNYemN8fGVufDB8fHx8fA%3D%3D",
      title: "Coastal Villa in Santorini",
      description: "A stunning villa with views of the Aegean Sea.",
      price: 3000000,
    },
    {
      _id: "13",
      image: "https://images.unsplash.com/photo-1577992141014-c211608c9038?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxNdjFoWGt6U1h6Y3x8ZW58MHx8fHx8",
      title: "Chic Studio in Tokyo",
      description: "A stylish studio apartment in the bustling city of Tokyo.",
      price: 850000,
    },
    {
      _id: "14",
      image: "https://images.unsplash.com/photo-1635111082117-7110a59d1032?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8N3xNdjFoWGt6U1h6Y3x8ZW58MHx8fHx8",
      title: "Beautiful Farmhouse in Nashville",
      description: "A spacious farmhouse with plenty of land.",
      price: 600000,
    },
    {
      _id: "15",
      image: "https://images.unsplash.com/photo-1617887020634-9a7e2bb2910c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8OHxNdjFoWGt6U1h6Y3x8ZW58MHx8fHx8",
      title: "Lakeside Retreat in Wisconsin",
      description: "A serene retreat by the lake, perfect for relaxation.",
      price: 400000,
    },
    {
      _id: "16",
      image: "https://images.unsplash.com/photo-1577992141014-c211608c9038?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXxNdjFoWGt6U1h6Y3x8ZW58MHx8fHx8",
      title: "Urban Apartment in Toronto",
      description: "An urban apartment in a trendy neighborhood.",
      price: 950000,
    },
    {
      _id: "17",
      image: "https://images.unsplash.com/photo-1505819244306-ef53954f9648?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3Dhttps://images.unsplash.com/photo-1600983958385-25793dc09f44?w=800",
      title: "Stylish Duplex in Chicago",
      description: "A modern duplex with spacious living areas.",
      price: 1300000,
    },
    {
      _id: "18",
      image: "https://images.unsplash.com/photo-1595521624992-48a59aef95e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
      title: "Victorian House in Boston",
      description: "A charming Victorian house with classic architecture.",
      price: 1100000,
    },
    {
      _id: "19",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Modern Home in Seattle",
      description: "A sleek modern home with a stunning design.",
      price: 1450000,
    },
    {
      _id: "20",
      image: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Contemporary House in Denver",
      description: "A contemporary house in a great neighborhood.",
      price: 750000,
    },
    {
      _id: "21",
      image: "https://images.unsplash.com/photo-1611602132416-da2045990f76?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Beachfront Villa in Hawaii",
      description: "A luxurious beachfront villa with ocean views.",
      price: 5000000,
    },
    {
      _id: "22",
      image: "https://images.unsplash.com/photo-1505819244306-ef53954f9648?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
      title: "Elegant Apartment in Rome",
      description: "An elegant apartment located near the Vatican.",
      price: 980000,
    },
    {
      _id: "23",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Luxury Cabin in Aspen",
      description: "A luxury cabin in the heart of the mountains.",
      price: 3200000,
    },
    {
      _id: "24",
      image: "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Sunny Loft in Lisbon",
      description: "A bright loft with a view of the river.",
      price: 740000,
    },
    {
      _id: "25",
      image: "https://images.unsplash.com/photo-1611602132416-da2045990f76?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Historic Home in Philadelphia",
      description: "A historic home with modern upgrades.",
      price: 650000,
    },
    {
      _id: "26",
      image: "https://images.unsplash.com/photo-1611602132416-da2045990f76?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Elegant Villa in Dubai",
      description: "An elegant villa in a prime location.",
      price: 4000000,
    },
    {
      _id: "27",
      image: "https://plus.unsplash.com/premium_photo-1661962841993-99a07c27c9f4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Contemporary House in Atlanta",
      description: "A contemporary house with a spacious layout.",
      price: 950000,
    },
    {
      _id: "28",
      image: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Charming Cottage in the Mountains",
      description: "A charming cottage with stunning mountain views.",
      price: 550000,
    },
    {
      _id: "29",
      image: "https://plus.unsplash.com/premium_photo-1661915661139-5b6a4e4a6fcc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Luxurious Apartment in Singapore",
      description: "A luxurious apartment with city skyline views.",
      price: 1600000,
    },
    {
      _id: "30",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8fDA%3D",
      title: "Modern Home in Cape Town",
      description: "A modern home with beautiful views of the ocean.",
      price: 1400000,
    },
  ];
  // State to store demo property data
  const [properties, setProperties] = useState(demoProperties); 
  const fallbackImageUrl = "https://via.placeholder.com/800"; // Fallback image URL

  // Array for carousel slides
  const slides = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop&q=80",
    "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&h=900&fit=crop&q=80",
    "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=1600&h=900&fit=crop&q=80",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&h=900&fit=crop&q=80",
  ];
  const handleViewDetails = (property) => {
    alert(
      `Property: ${property.title}\n\nDescription: ${property.description}\n\nPrice: $${property.price.toLocaleString()}`
    );
  };
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
                  onError={(e) => { e.target.src = fallbackImageUrl; }} // Fallback image on error
                />
                <h3 className="font-bold mt-2">{property.title}</h3>
                <p className="text-gray-600">{property.description}</p>
                <p className="text-gray-800 font-semibold">
                  Price: ${property.price.toLocaleString()}
                </p>
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
