
import React from 'react'
import { Globe } from 'lucide-react'
import { Link } from 'react-router-dom'

const Cuisine = ({ filterByArea }) => {
  const featuredAreas = [
    "British",
    "Canadian",
    "Chinese",
    "Turkish",
    "Japanese",
    "Italian",
    "Mexican",
    "Russian",
    "Thai",
  ]

  return (
    <>
      <div className="border-b border-[#E8D8C4] bg-[#F3E8D8]/80 shadow-inner shadow-[#603719]/5">
        <div className="mx-auto w-full max-w-7xl overflow-x-auto px-3 scrollbar-hide sm:px-5 lg:px-8">
          <div className="flex min-w-max items-center gap-2 py-3 sm:gap-3 sm:py-4">
            <div className="flex shrink-0 items-center pr-2 text-sm font-bold text-[#603719] sm:pr-3 sm:text-base lg:text-lg">
              <Globe className="mr-2 h-5 w-5 text-[#B87943] sm:h-6 sm:w-6" />
              Global Cuisines:
            </div>

            {featuredAreas.map((area) => (
              <Link
                to={`search/${area}`}
                onClick={() => filterByArea(area)}
                key={area}
                className="shrink-0 cursor-pointer rounded-full border border-[#E2D0BA] bg-white px-3 py-2 text-xs font-medium text-[#6B4A34] shadow-sm transition duration-200 hover:scale-[1.03] hover:border-[#C99A70] hover:bg-[#603719] hover:text-white hover:shadow-md hover:shadow-[#603719]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87943] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3E8D8] sm:px-4 sm:text-sm"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cuisine