"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselItem {
  id: string
  image: string
  title: string
  description?: string
}

interface Carousel3DProps {
  items: CarouselItem[]
  autoPlay?: boolean
  autoPlayInterval?: number
  className?: string
}

export function Carousel3D({ 
  items, 
  autoPlay = true, 
  autoPlayInterval = 4000,
  className = ""
}: Readonly<Carousel3DProps>) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!autoPlay || isHovered) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [autoPlay, autoPlayInterval, isHovered, items.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const getItemStyle = (index: number) => {
    const diff = index - currentIndex
    const totalItems = items.length
    
    // Normalize the difference to handle wrapping
    let normalizedDiff = diff
    if (diff > totalItems / 2) {
      normalizedDiff = diff - totalItems
    } else if (diff < -totalItems / 2) {
      normalizedDiff = diff + totalItems
    }

    const isActive = normalizedDiff === 0
    const isPrev = normalizedDiff === -1
    const isNext = normalizedDiff === 1
    const isVisible = Math.abs(normalizedDiff) <= 2

    if (!isVisible) {
      return {
        transform: 'translateX(0) translateZ(-300px) rotateY(0deg) scale(0.3)',
        opacity: 0,
        zIndex: 0
      }
    }

    if (isActive) {
      return {
        transform: 'translateX(0) translateZ(50px) rotateY(0deg) scale(1)',
        opacity: 1,
        zIndex: 3
      }
    }

    if (isPrev) {
      return {
        transform: 'translateX(-120px) translateZ(-50px) rotateY(25deg) scale(0.85)',
        opacity: 0.7,
        zIndex: 2
      }
    }

    if (isNext) {
      return {
        transform: 'translateX(120px) translateZ(-50px) rotateY(-25deg) scale(0.85)',
        opacity: 0.7,
        zIndex: 2
      }
    }

    // Side items
    const translateX = normalizedDiff > 0 ? 200 : -200
    const rotateY = normalizedDiff > 0 ? -45 : 45
    
    return {
      transform: `translateX(${translateX}px) translateZ(-100px) rotateY(${rotateY}deg) scale(0.6)`,
      opacity: 0.4,
      zIndex: 1
    }
  }

  return (
    <div className={`relative w-full ${className}`}>      {/* Main Carousel Container */}
      <div 
        className="relative h-96 md:h-[32rem] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ perspective: '1200px' }}
      >
        {/* Carousel Items */}
        <div className="relative w-full h-full flex items-center justify-center">        {items.map((item, index) => (
          <div
            key={item.id}
            className="absolute transition-all duration-700 ease-out cursor-pointer"
            style={getItemStyle(index)}
            onClick={() => goToSlide(index)}
          >
              <div className="relative group">                {/* Card Container */}
                <div className="relative w-64 h-80 md:w-72 md:h-96 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative w-full h-3/4 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 256px, 288px"
                      />
                    </div>
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#014994]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-4 h-1/4 flex flex-col justify-center bg-gradient-to-r from-[#014994] to-[#01a8bd]">
                    <h3 className="text-white font-semibold text-center text-sm md:text-base">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-white/80 text-xs text-center mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                  
                  {/* Active indicator */}
                  {index === currentIndex && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-4 h-4 bg-[#01a8bd] rounded-full shadow-lg animate-pulse" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          title="Previous slide"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200"
        >
          <ChevronLeft className="w-6 h-6 text-[#014994] group-hover:text-[#01a8bd] transition-colors" />
        </button>
        
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          title="Next slide"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group border border-gray-200"
        >
          <ChevronRight className="w-6 h-6 text-[#014994] group-hover:text-[#01a8bd] transition-colors" />
        </button>
      </div>      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-3">
        {items.map((item, index) => (
          <button
            key={`dot-${item.id}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}: ${item.title}`}
            title={`Go to slide ${index + 1}: ${item.title}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#01a8bd] scale-125 shadow-lg'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      {autoPlay && !isHovered && (
        <div className="absolute top-4 right-4 z-10">
          <div className="w-2 h-2 bg-[#01a8bd] rounded-full animate-pulse" />
        </div>
      )}
    </div>
  )
}
