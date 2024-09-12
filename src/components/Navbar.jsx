import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-around bg-purple-900 text-white py-2">
      <div className="logo">
        <span className="font-bold text-xl mx-8">Task Manager</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-bold transition-all duration-3">
          Home
        </li>
        <li className="cursor-pointer hover:font-bold transition-all duration-3">
          Your Task
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
