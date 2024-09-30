import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const blogPosts = [
  {
    id: 1,
    title: "5 Tips for First-Time Home Buyers",
    date: "September 20, 2024",
    description:
      "Buying your first home can be overwhelming. Here are five essential tips to guide you through the process.",
    image: "https://plus.unsplash.com/premium_photo-1664303418178-b8767b25f646?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMGJ1eWVyfGVufDB8fDB8fHww",
  },
  {
    id: 2,
    title: "How to Stage Your Home for Sale",
    date: "September 15, 2024",
    description:
      "Staging your home can make a significant difference in attracting buyers. Here are some tips to get started.",
    image: "https://plus.unsplash.com/premium_photo-1679857930663-e7c840a031ec?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZSUyMGJ1eWVyfGVufDB8fDB8fHww",
  },
  {
    id: 3,
    title: "The Importance of Location in Real Estate",
    date: "September 10, 2024",
    description:
      "Location is a crucial factor in real estate. Learn how to choose the right neighborhood for your needs.",
    image: "https://plus.unsplash.com/premium_photo-1679857225604-c8b1a95ab802?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbWUlMjBidXllcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    title: "Understanding Real Estate Market Trends",
    date: "September 5, 2024",
    description:
      "Staying informed about market trends can help you make better buying or selling decisions.",
    image: "https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbWUlMjBidXllcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    title: "Investing in Rental Properties",
    date: "August 30, 2024",
    description:
      "Rental properties can provide a steady income. Discover the key considerations for successful investing.",
    image: "https://plus.unsplash.com/premium_photo-1679941669114-4d0fe125040d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvbWUlMjBidXllcnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

const BlogPage = () => {
  return (
    <div>
      <Header />
      <div className="max-w-7xl mx-auto p-6">
      
        <h2 className="text-5xl font-bold mb-6 text-center text-blue-800 border-b-4 border-blue-600 pb-2">
        Blog
          </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{post.title}</h2>
                <p className="text-gray-500">{post.date}</p>
                <p className="mt-2 text-gray-700">{post.description}</p>
                <Link
                  to={`https://www.homes247.in/blogs/tips-for-buying-a-house-4`}
                  className="mt-4 inline-block text-blue-600 hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
