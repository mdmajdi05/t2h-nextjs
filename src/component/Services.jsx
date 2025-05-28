"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Services() {
  const services = [
    {
      id: 1,
      image: "/International/hotel.jpg",
      title: "Hotels",
    },
   national/wedding.jpg",
      title: "Wedding",
    },
    {
      id: 4,
      ima
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };="relative w-full h-[200px]">
                  <img
                    src={service.image}
                    alt={service.title}
                  
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Services;
