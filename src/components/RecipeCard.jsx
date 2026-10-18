
import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({ meal }) => {
  return (
    <Link
      to={`/recipe/${meal.idMeal}`}
      className="group block h-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87943] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FAF5ED]"
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#E8D8C4] bg-white shadow-md shadow-[#603719]/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#C99A70] hover:shadow-xl hover:shadow-[#603719]/10">
        <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl border-2 border-transparent transition duration-300 group-hover:border-[#C99A70]/60" />

        <div className="flex items-center justify-center p-3 sm:p-4">
          <img
            src={meal?.strMealThumb}
            alt={meal?.strMeal || "Recipe"}
            loading="lazy"
            className="aspect-square w-full max-w-70 rounded-xl border border-[#E8D8C4] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="flex flex-1 flex-col px-3 pb-4 pt-1 text-center sm:px-4 sm:pb-5">
          <h3 className="mb-1 line-clamp-2 min-h-14 text-base font-semibold leading-7 text-[#603719] transition-colors duration-300 group-hover:text-[#B87943] sm:text-lg">
            {meal?.strMeal}
          </h3>
        </div>
      </div>
    </Link>
  )
}

export default RecipeCard
