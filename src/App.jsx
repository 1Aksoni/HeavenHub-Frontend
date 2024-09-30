import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import FormRegistration from "./Auth/FormRegistration";
import Login from "./Auth/Login";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import BuyProperty from "./Pages/BuyProperty";
import RentProperty from "./Pages/RentProperty";
import PropertyManagement from "./Pages/PropertyManagement";
import ListingPage from "./Pages/ListingPage";
import BlogPage from "./Pages/BlogPage";
import ScheduleViewing from "./Pages/ScheduleViewing";
import ContactUs from "./Pages/ContactUs";
import PropertyDetail from './Pages/PropertyDetails.jsx';
import MainPage from "./Pages/MainPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/register" element={<FormRegistration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/buy" element={<BuyProperty />} />
        <Route path="/rent" element={<RentProperty />} />
        <Route path="/manage" element={<PropertyManagement />} />
        <Route path="/list" element={<ListingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/scheduleMeeting" element={<ScheduleViewing />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/property/:id" element={<PropertyDetail />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
