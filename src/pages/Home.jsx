// src/pages/Home.jsx
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 to-pink-400 p-6">
      <div className="bg-rose-50 rounded-3xl shadow-lg p-10 max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-rose-700 mb-6">
          You are invited
        </h2>
        {/* Profile Image */}
        <div className="flex justify-center">
            
          <div className="p-1 rounded-full bg-gradient-to-tr from-pink-500 via-yellow-400 to-pink-500">
            <img
              src=""// <-- replace with actual image path
              alt="Birthday Celebrant"
              className="w-40 h-40 rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="mt-6 text-3xl font-bold text-rose-800">
          Alhaja Afolabi Sidikat Aduke
        </h1>

        {/* Birthday Title */}
        <h2 className="mt-4 text-2xl font-[cursive] text-pink-700">
          70th Birthday
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-700 text-lg">
          Join us as we celebrate seven decades of{" "}
          <span className="text-rose-700 font-semibold">
            love, wisdom, and beautiful memories
          </span>
        </p>

        {/* Button */}
        <div className="mt-8">
          <Link
            to="/details" // <-- route to next page
            className="px-6 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-rose-700 to-yellow-500 hover:scale-105 transform transition"
          >
            Celebrating 70 Years of Life
          </Link>
        </div>
      </div>
    </div>
  );
}
