import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-orange-100 shadow-md">
      <h1 className="text-2xl font-bold text-orange-600">Chucks Kitchen</h1>
      <nav>
        <ul className="flex gap-6 font-medium">
          <li><a href="#hero">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
