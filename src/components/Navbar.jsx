// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/details", label: "Details" },
    { path: "/rsvp", label: "RSVP" },
  ];

  return (
    <nav className="bg-gradient-to-r from-rose-700 to-yellow-500 shadow-lg p-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-3">
        {/* Logo / Title */}
        <h1 className="text-white text-2xl font-extrabold tracking-wide text-center md:text-left">
          🎉 70th Jubilee
        </h1>

        {/* Links (stack on mobile, row on desktop) */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-center">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-bold transition ${
                location.pathname === link.path
                  ? "text-yellow-300 underline"
                  : "text-white hover:text-yellow-200"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
