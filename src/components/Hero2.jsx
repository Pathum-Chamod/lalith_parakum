"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { glowEffect } from "@/helper/styles";

const Hero2 = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Track the current slide index
  const slides = [
    "https://images.unsplash.com/photo-1520706004450-f170ae7d8176?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1526631134603-8d692d622f78?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1681492529719-a1d3d8cc498a?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval
  }, [slides.length]);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="w-full h-[calc(100vh-80px)] relative overflow-hidden" style={glowEffect}>
      <div className="h-full w-full flex items-center justify-center relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              fill
            />
          </div>
        ))}
 
        <button
          onClick={handlePrevious}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-20"
        >
          &#9664;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-20"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Hero2;
