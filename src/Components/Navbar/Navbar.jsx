import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {

  function navToggle() {
    document.getElementById("hamburger").onclick = function toggleMenu() {
      const navToggle = document.getElementsByClassName("toggle");
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle("hidden");
      }
    };
  }

  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="fixed w-full z-50">
      <nav className={`flex flex-wrap items-center justify-between px-10 lg:px-28 bg-[#2c3e50] ${isScrolled ? 'py-3' : 'py-7'} transition`}>
    <div className='text-white text-uppercase font-bold text-3xl'>START FRAMEWORK</div>
    <div className="flex md:hidden">
        <button id="hamburger" onClick={navToggle}>
          <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="48" height="48" />
          <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="48" height="48" />
        </button>
    </div>
    <div
        className="toggle gap-6 hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-teal-900 md:border-none">
        <NavLink to="/"
            className="block md:inline-block text-white px-3 py-3 border-b-2 border-teal-900 md:border-none rounded-lg font-bold">Home
        </NavLink>
        <NavLink to="/portfolio"
            className="block md:inline-block text-white px-3 py-3 border-b-2 border-teal-900 md:border-none rounded-lg font-bold">Portfolio
        </NavLink>
        <NavLink to="/about"
            className="block md:inline-block text-white px-3 py-3 border-b-2 border-teal-900 md:border-none rounded-lg font-bold">About
        </NavLink>
        <NavLink to="/contact"
            className="block md:inline-block text-white px-3 py-3 border-b-2 border-teal-900 md:border-none rounded-lg font-bold">Contact
        </NavLink>
    </div>
</nav>
    </div>
  )
}
