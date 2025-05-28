"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaHeart, FaStar, FaPhone, FaTag } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
impor,
    },
    {
      id: 2,
      images: ["/Resort/The_Everest_Stay-3.png", "/Resort/The_Everest_Stay-4.png", "/Resort/The_Everest_Stay-5.png"],
      name: "The Everest Stay",
      location: "Nepal",
      phone: "9878746753",
      category: "Luxury",
      price: "Rs 35,499.00",
      rating: 4.8,
    },
    {
_Resort-2.png", "/Resort/Mountain_Bliss_Resort-3.png"],
      name: "Mountain Bliss Resort",
      location: "Nepal",
      phone: "9878746753",
      category: "Honeymoon",
      price: "Rs 31,799.00",
      rating: 4.7,
    },
  ];

  const settings = {
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
      {loading ? (
        <div className="flex space-x-4">
          {/* Skeleton loader */}
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="w-full px-2">
              <div className="w-auto bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
                <div className="relative h-48 w-full bg-gray-300"></div>
                <div className="p-4">
                  <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
                  
              </div>
            </div>
          ))}
        </div>
      ) : (ows={false}
                    autoplay={true}
                    autoplaySpeed={3000}
                    infinite={true}
                  >
                    {resort.images.map((image, index) => (
                      <div key={index} className="relative h-48 w-full">
                        <Image
                          src={image}
                          alt={resort.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    ))}
                
                <button className="absolute top-2 right-2 bg-white text-gray-600 p-2 rounded-full shadow-md">
                  <FaHeart />
                </button>
                {/* Resort Details */}
                <div className="p-4">
                  <h3 className="text-lg font-bold">{resort.name}</h3>
                  <div className="flex items-center text-sm text-gray-500 my
          ))}
        </Slider>
      )}
    </div>
  );
}

export default Resort;
