// src/pages/Details.jsx
import { useEffect, useState } from "react";

export default function Details() {
  // Countdown Logic
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-10-11T10:00:00"); // Event Date & Time
    const difference = eventDate - new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-rose-100 to-purple-200 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto bg-white/90 rounded-2xl shadow-lg p-6 sm:p-10">
        {/* Event Info */}
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 text-left">
          <div>
            <h3 className="flex items-center gap-2 text-rose-700 font-semibold text-lg sm:text-xl">
              📅 Date
            </h3>
            <p className="mt-1 text-gray-700 text-sm sm:text-base">
              Saturday, October 11th, 2025
            </p>

            <h3 className="flex items-center gap-2 mt-4 sm:mt-6 text-rose-700 font-semibold text-lg sm:text-xl">
              📍 Venue
            </h3>
            <p className="mt-1 text-gray-700 text-sm sm:text-base">
              Est Bank secondary school, Ofada Town <br />
              Mowe, Ogun State, Nigeria
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-rose-700 font-semibold text-lg sm:text-xl">
              ⏰ Time
            </h3>
            <p className="mt-1 text-gray-700 text-sm sm:text-base">
              10:00 AM prompt
            </p>

            <h3 className="flex items-center gap-2 mt-4 sm:mt-6 text-rose-700 font-semibold text-lg sm:text-xl">
              🌟 Directions
            </h3>
            <p className="mt-1 text-gray-700 text-sm sm:text-base leading-relaxed">
              Take a bus from Berger, alight at Mowe B/S. Cross to the other side
              and take a napep going to Ofada roundabout. Take bike from there to
              Est Bank secondary school
            </p>
          </div>
        </div>

        {/* Countdown */}
        <div className="mt-10 sm:mt-12 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-rose-800">
            Celebration Countdown
          </h2>
          <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6 text-rose-700 font-mono">
            <div className="w-20 sm:w-24">
              <span className="block text-3xl sm:text-4xl font-bold">
                {timeLeft.days || 0}
              </span>
              <span className="text-sm sm:text-base">Days</span>
            </div>
            <div className="w-20 sm:w-24">
              <span className="block text-3xl sm:text-4xl font-bold">
                {timeLeft.hours || 0}
              </span>
              <span className="text-sm sm:text-base">Hours</span>
            </div>
            <div className="w-20 sm:w-24">
              <span className="block text-3xl sm:text-4xl font-bold">
                {timeLeft.minutes || 0}
              </span>
              <span className="text-sm sm:text-base">Minutes</span>
            </div>
            <div className="w-20 sm:w-24">
              <span className="block text-3xl sm:text-4xl font-bold">
                {timeLeft.seconds || 0}
              </span>
              <span className="text-sm sm:text-base">Seconds</span>
            </div>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="mt-10 sm:mt-12 bg-gradient-to-r from-rose-700 to-yellow-500 text-white rounded-xl p-4 sm:p-6 text-center italic text-base sm:text-lg leading-relaxed">
          "Your presence is the greatest gift. <br />
          Let's come together to honor a remarkable woman <br />
          and celebrate the joy she brings to all our lives."
        </div>
      </div>
    </div>
  );
}
