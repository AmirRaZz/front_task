"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

type CarouselProps = {
  slides: {
    id: number;
    image: string;
    alt: string;
  }[];
  autoSlideInterval?: number; // in milliseconds
};

const Carousel: React.FC<CarouselProps> = ({
  slides,
  autoSlideInterval = 5000, // default to 5 seconds
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Reset the timer whenever currentIndex changes
  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      goToNext();
    }, autoSlideInterval);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, autoSlideInterval]);

  // Mobile touch handling
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const touchDiff = touchStartX.current - touchEndX.current;
    if (touchDiff > 50) {
      // Swipe left, go to next slide
      goToNext();
    } else if (touchDiff < -50) {
      // Swipe right, go to previous slide
      goToPrevious();
    }
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-[1400px] mx-auto py-10  overflow-hidden bg-green-50/30 rounded-2xl">
      {/* Decorative botanical elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top right leaf decoration */}
        <div
          className="absolute top-[30px] right-[30px] w-[150px] h-[150px] opacity-50 bg-no-repeat bg-contain"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none'%3E%3Cpath d='M20,80 Q40,60 60,80 T90,60' stroke='%2374a57f' stroke-width='1.5' fill='none'/%3E%3Cpath d='M30,70 Q50,50 70,70 T80,50' stroke='%2374a57f' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Bottom left leaf decoration */}
        <div
          className="absolute bottom-[30px] left-[30px] w-[180px] h-[180px] opacity-50 bg-no-repeat bg-contain rotate-180"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none'%3E%3Cpath d='M10,40 Q30,70 50,40 T90,70' stroke='%2374a57f' stroke-width='1.5' fill='none'/%3E%3Cpath d='M20,30 Q40,60 60,30 T80,60' stroke='%2374a57f' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Scattered small dots decoration */}
        <div
          className="absolute inset-0 opacity-30 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' fill='none'%3E%3Ccircle cx='50' cy='50' r='3' fill='%2374a57f' opacity='0.5'/%3E%3Ccircle cx='150' cy='70' r='4' fill='%2374a57f' opacity='0.5'/%3E%3Ccircle cx='80' cy='160' r='3' fill='%2374a57f' opacity='0.5'/%3E%3Ccircle cx='180' cy='130' r='2' fill='%2374a57f' opacity='0.5'/%3E%3Ccircle cx='30' cy='120' r='2' fill='%2374a57f' opacity='0.5'/%3E%3Ccircle cx='120' cy='30' r='3' fill='%2374a57f' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "400px",
          }}
        ></div>
      </div>

      {/* Main carousel container */}
      <div className="relative w-full h-[500px] md:h-[500px] sm:h-[300px] mx-auto overflow-hidden rounded-xl z-[1] shadow-lg">
        <div
          className="relative w-full h-full"
          ref={slideRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                index === currentIndex ? "opacity-100 z-[1]" : "opacity-0"
              }`}
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-5 -translate-y-1/2 z-10 w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center bg-white/30 border-none rounded-md cursor-pointer transition-all duration-300 hover:scale-110"
          onClick={goToPrevious}
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 sm:w-4 sm:h-4 text-white"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button
          className="absolute top-1/2 right-5 -translate-y-1/2 z-10 w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center bg-white/30 border-none rounded-md cursor-pointer transition-all duration-300 hover:scale-110"
          onClick={goToNext}
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 sm:w-4 sm:h-4 text-white"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 sm:w-2 sm:h-2 rounded-full border-0 p-0 cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
