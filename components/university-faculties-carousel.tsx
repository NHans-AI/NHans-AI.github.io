"use client"

import React from 'react'
import { Carousel3D } from '@/components/ui/carousel-3d'

const universityFaculties = [
  {
    id: 'sciences',
    image: '/UPAI-LGP23-PNG-3D/CIEN.png',
    title: 'Sciences',
    description: 'Faculty of Sciences - Exploring the natural world through research and discovery'
  },
  {
    id: 'economics',
    image: '/UPAI-LGP23-PNG-3D/ECONOMIA.png',
    title: 'Economics',
    description: 'Faculty of Economics - Understanding markets, finance, and economic systems'
  },
  {
    id: 'engineering',
    image: '/UPAI-LGP23-PNG-3D/ENG.png',
    title: 'Engineering',
    description: 'Faculty of Engineering - Building the future through innovation and technology'
  },
  {
    id: 'pharmacy',
    image: '/UPAI-LGP23-PNG-3D/FARMÁCIA.png',
    title: 'Pharmacy',
    description: 'Faculty of Pharmacy - Advancing healthcare through pharmaceutical sciences'
  },
  {
    id: 'letters',
    image: '/UPAI-LGP23-PNG-3D/LETRAS.png',
    title: 'Letters',
    description: 'Faculty of Letters - Exploring language, literature, and cultural studies'
  },
  {
    id: 'medicine',
    image: '/UPAI-LGP23-PNG-3D/MED.png',
    title: 'Medicine',
    description: 'Faculty of Medicine - Training future healthcare professionals and researchers'
  }
]

export function UniversityFacultiesCarousel() {
  return (
    <div className="max-w-7xl mx-auto">
      <Carousel3D 
        items={universityFaculties}
        autoPlay={true}
        autoPlayInterval={5000}
        className="mb-8"
      />

      <div className="text-center mt-12">
        <p className="text-gray-600 mb-6">
          Need information about any of these faculties? Our AI assistant is here to help 24/7.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {universityFaculties.map((faculty) => (
            <span 
              key={faculty.id}
              className="px-4 py-2 bg-white rounded-full shadow-md border border-gray-200 text-sm text-[#014994] hover:bg-[#014994] hover:text-white transition-all duration-300 cursor-pointer"
            >
              {faculty.title}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
