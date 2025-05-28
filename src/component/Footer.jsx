"use client"
import React from 'react'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
function Footer() {
    r
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Privacy Policy
             

        {/* Quick Links Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick links</h3>
          <ul>
            <li className="mb-2">
              =
            </li>
            <li className="mb-2">
              <a href="#PopularDestination" className="hover:underline">
                Popular Destination
              </a>
            </li>
            <li className="mb-2">
              <a href="/Domestic" className="hover:underline">
                Domestic Destination
              </a>
            </li>
            <li>
              <a href="/International" className="hover:underline">
                International Destination
              </a>className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/AboutUs" className="hover:underline">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us on</h3>
          <div py-1 rounded 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          >
            Facebook
          </span></Link>
            <Link href="https://www.instagram.com/triptohoneymoon_official/" target='blank' className='relative group'><FaInstagram className="text-xl cursor-pointer hover:text-pink-500" />
            <span
         nter hover:text-red-600" />
            <span
            className={`absolute  transform -translate-x-6 -translate-y-[50px]
                        bg-red-600 text-white text-sm px-2 py-1 rounded 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          >
            Youtube
          </span></Link>
          </di
    </footer>
    )
}

export default Footer
