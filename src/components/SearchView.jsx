
import React from 'react'
import { ChevronLeft, Loader } from 'lucide-react'
import { Link } from 'react-router-dom'
import RecipeCard from './RecipeCard'

const SearchView = ({ meals, loading }) => {
  return (
    <>
      <main className="mx-auto w-full max-w-7xl px-3 py-6 sm:px-5 sm:py-8 lg:px-8">
        <Link
          to="/"
          className="group mb-6 inline-flex items-center text-base font-semibold text-[#7A4A2A] transition-colors duration-300 hover:text-[#B87943] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87943] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF5ED] sm:mb-8 sm:text-lg"
        >
          <ChevronLeft className="mr-1 h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 sm:h-6 sm:w-6" />
          Back To Home
        </Link>

        {loading && (
          <div className="flex items-center justify-center gap-2 px-3 py-10 text-center text-[#7A5B45] sm:py-12">
            <Loader className="h-5 w-5 shrink-0 animate-spin text-[#B87943]" />
            <span>Searching the database...</span>
          </div>
        )}

        {!loading && meals.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
            {meals.map((meal, index) => (
              <RecipeCard key={index} meal={meal} />
            ))}
          </div>
        )}

        {!loading && meals.length === 0 && (
          <p className="rounded-2xl border border-[#E8D8C4] bg-white px-4 py-8 text-center text-sm text-[#7A5B45] shadow-sm shadow-[#603719]/5 sm:px-6 sm:py-10 sm:text-base">
            No recipes found. Please try another search.
          </p>
        )}
      </main>
    </>
  )
}

export default SearchView
