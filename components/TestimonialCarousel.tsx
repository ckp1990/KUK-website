'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '@/lib/data/home';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If there are 3 or fewer testimonials, render the static grid layout (as per original design)
  // But request was "when there is more than three testimonial", so we keep consistent behavior if > 3.
  // If <= 3, we can just render them in a grid without carousel controls to keep it simple,
  // or use the carousel logic but disable buttons.
  // Based on "I want when there is more than three testimonial, there must be side button",
  // we will render the static grid if <= 3, and the carousel if > 3.

  if (!testimonials || testimonials.length <= 3) {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials?.map((t) => (
          <div key={t.name} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden relative">
              <Image
                src={t.image}
                alt={t.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <h3 className="font-bold text-lg mb-1">{t.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{t.role}</p>
            <p className="text-gray-700 italic">&quot;{t.quote}&quot;</p>
          </div>
        ))}
      </div>
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Helper to get the visible items based on current index.
  // We want to show 3 items.
  // Since we want infinite loop, we need to handle wrapping.
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="relative group">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white hover:bg-gray-100 text-gray-800 p-2 rounded-full shadow-md border border-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white hover:bg-gray-100 text-gray-800 p-2 rounded-full shadow-md border border-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel Content */}
      <div className="grid md:grid-cols-3 gap-8">
        {visibleTestimonials.map((t, index) => (
          // We use index as key here because the items are transient in the view.
          // Ideally use t.id if available, but (currentIndex + index) ensures uniqueness for animation keys if we added animation.
          // For simple switching, index is sufficient, though t.name + index is safer if names are unique.
          <div key={`${t.name}-${index}`} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center transition-all duration-300">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden relative">
              <Image
                src={t.image}
                alt={t.name}
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <h3 className="font-bold text-lg mb-1">{t.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{t.role}</p>
            <p className="text-gray-700 italic">&quot;{t.quote}&quot;</p>
          </div>
        ))}
      </div>

      {/* Mobile Indicator / Note: On mobile this grid typically stacks.
          The current grid md:grid-cols-3 means on mobile it's 1 col.
          So on mobile, we show 3 items stacked vertically.
          If we want to show 1 item on mobile and scroll, we'd need to adjust the Logic.

          User asked for "grid md:grid-cols-3".
          Let's stick to the requested "3 at a time" which usually implies the desktop view.
          On mobile, the existing behavior (stacking 3 vertical) might be overwhelming if we loop through ALL of them.
          However, the prompt implies the desktop "rolling effect".

          If we want a true carousel on mobile (1 item visible), we'd need responsive JS logic to slice 1 item instead of 3.
          For now, I'll keep the logic simple: it shows 3 items. On desktop they are side-by-side. On mobile they are stacked.
          The arrow buttons will rotate the set of 3.
       */}
    </div>
  );
}
