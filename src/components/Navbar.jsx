// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/details", label: "Details" },
    { path: "/rsvp", label: "Rsvp" },
  ];

  return (
    <nav className="bg-gradient-to-r from-rose-700 to-yellow-500 shadow-lg p-4">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-white text-2xl font-extrabold tracking-wide">
          🎉 70th Jubilee
        </h1>

        {/* Links */}
        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-bold ${
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
