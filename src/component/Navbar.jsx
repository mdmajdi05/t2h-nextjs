"use client"; // Add this directive

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-blue-950 p-4 sticky top-0 w-full z-10">
     className="flex items-center text-white ">
  {/* Logo */}
  <img src="/images/logo.png" alt="Website Logo" className="h-[40px] w-[200px]  md:w-[100%] mr-2" />
  
</Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1">
           <Link href="/" className="text-white hover:bg-gray-700 /ContactuS" className="text-white block py-2">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;