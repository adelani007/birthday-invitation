// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-200 to-pink-400 p-4 sm:p-6">
      <div className="bg-rose-50 rounded-3xl shadow-lg p-6 sm:p-10 max-w-xl w-full text-center">
        {/* Invitation Title */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-rose-700 mb-4 sm:mb-6">
          You are invited
        </h2>

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="p-1 rounded-full bg-gradient-to-tr from-pink-500 via-yellow-400 to-pink-500">
            <img
              src="./mum.jpg" // <-- replace with actual image path
              alt="Birthday Celebrant"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <h1 className="mt-4 sm:mt-6 text-2xl sm:text-3xl font-bold text-rose-800">
          Alhaja Afolabi Sidikat Aduke
        </h1>

        {/* Birthday Title */}
        <h2 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-[cursive] text-pink-700">
          70th Birthday
        </h2>

        {/* Description */}
        <p className="mt-3 sm:mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
          Join us as we celebrate seven decades of{" "}
          <span className="text-rose-700 font-semibold">
            love, wisdom, and beautiful memories
          </span>
        </p>

        {/* Button */}
        <div className="mt-6 sm:mt-8">
          <Link
            to="/details"
            className="px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold text-white rounded-full bg-gradient-to-r from-rose-700 to-yellow-500 hover:scale-105 transform transition"
          >
            Celebrating 70 Years of Life
          </Link>
        </div>
      </div>
    </div>
  );
}
