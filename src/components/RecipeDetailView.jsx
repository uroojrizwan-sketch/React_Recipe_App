import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useFetch } from './useFetch'
import { API_URL } from './useFetch'
import { Loader, ChevronLeft, Utensils, BookOpen } from 'lucide-react'

const RecipeDetailView = () => {
  const { id } = useParams()

  const { data, loading, error } = useFetch(`${API_URL}lookup.php?i=${id}`)
  const meal = data?.meals?.[0]

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-2 px-4 py-12 text-center text-[#7A5B45]">
        <Loader className="h-5 w-5 animate-spin text-[#B87943]" />
        <span>Preparing your recipe card</span>
      </div>
    )
  }

  if (error || !meal) {
    return (
      <main className="mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-[#E8D8C4] bg-white p-6 shadow-sm sm:p-10">
          <h2 className="text-xl font-bold text-[#603719]">
            Recipe not found
          </h2>
          <p className="mt-2 text-sm text-[#7A5B45]">
            Sorry, this recipe could not be loaded.
          </p>
          <Link
            to="/"
            className="mt-5 inline-flex items-center rounded-full bg-[#603719] px-5 py-2.5 font-semibold text-white transition hover:bg-[#7A4A2A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87943] focus-visible:ring-offset-2"
          >
            <ChevronLeft className="mr-1 h-5 w-5" />
            Back To Home
          </Link>
        </div>
      </main>
    )
  }

  const ingredients = []

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`]
    const measure = meal[`strMeasure${i}`]

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : "",
      })
    }
  }

  const instructions = meal.strInstructions
    ? meal.strInstructions
        .split(".")
        .map((step) => step.trim())
        .filter((step) => step.length > 0)
    : []

  return (
    <>
      <main className="mx-auto max-w-7xl px-3 py-6 sm:px-6 sm:py-8 lg:px-8">

        {/* Back Navigation */}
        <Link
          to="/"
          className="group mb-5 inline-flex items-center rounded-lg font-medium text-[#805333] transition hover:text-[#B87943] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87943] sm:mb-6 sm:text-lg"
        >
          <ChevronLeft className="mr-1 h-5 w-5 transition-transform group-hover:-translate-x-1 sm:h-6 sm:w-6" />
          Back To Home
        </Link>

        {/* Main Recipe Container */}
        <div className="overflow-hidden rounded-2xl border border-[#E8D8C4] bg-white p-4 shadow-lg shadow-[#603719]/5 sm:rounded-3xl sm:p-6 md:p-8 lg:p-10">

          {/* Recipe Overview */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10 xl:gap-12">

            {/* Recipe Image and Title */}
            <div className="min-w-0">
              <h1 className="mb-5 text-2xl font-black leading-tight tracking-tight text-[#603719] sm:mb-6 sm:text-3xl lg:text-4xl">
                {meal?.strMeal}
              </h1>

              <div className="overflow-hidden rounded-2xl border border-[#E8D8C4] bg-[#FAF5ED] p-2 shadow-sm sm:p-3">
                <img
                  src={meal?.strMealThumb}
                  alt={meal?.strMeal || "Recipe"}
                  className="aspect-square w-full rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Ingredients */}
            <section className="min-w-0 rounded-2xl border border-[#E8D8C4] bg-[#FCF8F2] p-4 sm:p-6 lg:p-5 xl:p-6">

              <h2 className="mb-5 flex items-center gap-2 border-b border-[#E8D8C4] pb-4 text-xl font-bold text-[#603719] sm:mb-6 sm:gap-3 sm:text-2xl">
                <Utensils className="h-6 w-6 shrink-0 text-[#B87943] sm:h-7 sm:w-7" />
                Key Ingredients
              </h2>

              <ul className="grid grid-cols-1 gap-x-5 gap-y-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {ingredients.map((item, index) => (
                  <li
                    key={index}
                    className="flex min-w-0 items-start gap-2 text-sm leading-relaxed text-[#6F5541] sm:text-base"
                  >
                    <span className="shrink-0 pt-0.5 text-lg font-bold text-[#B87943]">
                      ◂
                    </span>

                    <span className="min-w-0 wrap-break-word">
                      {item.measure && (
                        <span className="mr-1 font-semibold text-[#603719]">
                          {item.measure}
                        </span>
                      )}
                      {item.ingredient}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Recipe Categories */}
              <div className="mt-7 border-t border-[#E8D8C4] pt-5">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#603719] px-4 py-1.5 text-sm font-semibold text-white shadow-sm">
                    {meal.strCategory}
                  </span>

                  <span className="rounded-full bg-[#EAD9C3] px-4 py-1.5 text-sm font-semibold text-[#603719]">
                    {meal.strArea}
                  </span>
                </div>
              </div>

            </section>
          </div>

          {/* Preparation Instructions */}
          <section className="mt-9 border-t border-[#E8D8C4] pt-7 sm:mt-12 sm:pt-9 lg:mt-14">

            <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-[#603719] sm:mb-8 sm:gap-3 sm:text-3xl">
              <BookOpen className="h-6 w-6 shrink-0 text-[#B87943] sm:h-7 sm:w-7" />
              <span>Detailed Preparation Steps</span>
            </h2>

            <ol className="space-y-4 sm:space-y-5">
              {instructions.map((step, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-[#E8D8C4] border-l-4 border-l-[#B87943] bg-[#FCF8F2] p-4 shadow-sm transition duration-300 hover:border-[#C99A70] hover:bg-[#F8F0E5] sm:gap-4 sm:p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#603719] text-sm font-bold text-white sm:h-9 sm:w-9 sm:text-base">
                    {index + 1}
                  </span>

                  <p className="min-w-0 flex-1 wrap-break-word text-sm leading-7 text-[#6F5541] sm:text-base sm:leading-8 lg:text-lg">
                    {step.trim()}
                  </p>
                </li>
              ))}
            </ol>

          </section>

        </div>
      </main>
    </>
  )
}

export default RecipeDetailView