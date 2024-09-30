import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <header className="bg-white p-6 shadow">
          <h1 className="text-3xl font-bold text-center text-indigo-600">
            About Us
          </h1>
        </header>
        <main className="flex-grow p-6">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At HavenHub, our mission is to connect people with their ideal
              properties seamlessly. We strive to provide a user-friendly
              platform that makes buying, selling, and renting properties easy
              and efficient for everyone.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
              Our Values
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-2">
                Integrity: We uphold the highest standards of honesty and
                transparency.
              </li>
              <li className="mb-2">
                Customer-Centric: Our clients are at the heart of everything we
                do.
              </li>
              <li>
                Innovation: We embrace technology to provide the best experience
                for our users.
              </li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-indigo-700">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Akshat Soni",
                  title: "CEO",
                  description:
                    "Akshat has over 10 years of experience in the real estate industry.",
                  phone: "+918120722604",
                  website: "www.linkedin.com/in/akshat-soni-7b0831247",
                }
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-200 hover:shadow-xl hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold text-indigo-600">
                    {member.name}
                  </h3>
                  <p className="text-gray-600">{member.title}</p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="flex space-x-4 mt-2">
                    <Link
                      to ={`tel:${member.phone}`}
                      className="text-blue-600 flex items-center hover:underline"
                    >
                      <span className="mr-1">📞</span>
                      {member.phone}
                    </Link>
                    <Link
                      to ={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 flex items-center hover:underline"
                    >
                      <span className="mr-1">🌐</span>
                      Website
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
