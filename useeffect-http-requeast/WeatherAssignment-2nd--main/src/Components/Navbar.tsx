// import React from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Author", path: "/admin/blog" },
  { name: "Jokes", path: "/admin/jokes" },
  { name: "Weather", path: "/admin/weather" },
];

const Navbar = () => {
  return (
    <nav className="w-full bg-gradient-to-r from-blue-600 via-indigo-700 to-blue-900 py-4 shadow-lg">
      <div className="max-w-5xl mx-auto flex justify-center">
        <ul className="flex gap-10">
          {navLinks.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-white text-lg font-semibold px-4 py-2 rounded-xl transition-all duration-300 
                  ${isActive ? " text-black shadow-md" : "hover:bg-white/20"}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
