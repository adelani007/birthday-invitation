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
    <div className="min-h-screen bg-gradient-to-r from-pink-200 via-rose-100 to-purple-200 p-6">
      <div className="max-w-4xl mx-auto bg-white/90 rounded-2xl shadow-lg p-10">
        {/* Event Info */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="flex items-center gap-2 text-rose-700 font-semibold text-xl">
              📅 Date
            </h3>
            <p className="mt-1 text-gray-700">Saturday, October 11th, 2025</p>

            <h3 className="flex items-center gap-2 mt-6 text-rose-700 font-semibold text-xl">
              📍 Venue
            </h3>
            <p className="mt-1 text-gray-700">
              Est Bank secondary school, Ofada Town <br />
              Mowe, Ogun State, Nigeria
            </p>
          </div>

          <div>
            <h3 className="flex items-center gap-2 text-rose-700 font-semibold text-xl">
              ⏰ Time
            </h3>
            <p className="mt-1 text-gray-700">10:00 AM prompt</p>

            <h3 className="flex items-center gap-2 mt-6 text-rose-700 font-semibold text-xl">
              🌟 Directions
            </h3>
            <p className="mt-1 text-gray-700">
              Take a bus from Berger, alight at Mowe B/S. Cross to the other side
              and take a napep going to Ofada roundabout. Take bike from there to
              Est Bank secondary school
            </p>
          </div>
        </div>

        {/* Countdown */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-rose-800">
            Celebration Countdown
          </h2>
          <div className="mt-6 flex justify-center gap-6 text-rose-700 font-mono text-2xl">
            <div>
              <span className="block text-4xl font-bold">{timeLeft.days || 0}</span>
              Days
            </div>
            <div>
              <span className="block text-4xl font-bold">{timeLeft.hours || 0}</span>
              Hours
            </div>
            <div>
              <span className="block text-4xl font-bold">{timeLeft.minutes || 0}</span>
              Minutes
            </div>
            <div>
              <span className="block text-4xl font-bold">{timeLeft.seconds || 0}</span>
              Seconds
            </div>
          </div>
        </div>

        {/* Closing Quote */}
        <div className="mt-12 bg-gradient-to-r from-rose-700 to-yellow-500 text-white rounded-xl p-6 text-center italic text-lg">
          "Your presence is the greatest gift. <br />
          Let's come together to honor a remarkable woman <br />
          and celebrate the joy she brings to all our lives."
        </div>
      </div>
    </div>
  );
}
