
import { Utensils } from 'lucide-react'
import { Link } from 'react-router-dom'

const CategorySelection = ({ filterByCategory }) => {
  const featuredCategories = [
    "Chicken",
    "Dessert",
    "Seafood",
    "Vegetarian",
    "Breakfast",
    "Pasta",
    "Goat",
    "Lamb",
    "Pork",
  ]

  return (
    <div>
      <section className="mx-auto mt-4 w-full sm:mt-6">
        <h2 className="mb-5 flex items-center gap-2 border-l-4 border-[#B87943] pl-3 text-xl font-bold tracking-tight text-[#603719] sm:mb-6 sm:gap-3 sm:pl-4 sm:text-2xl lg:text-3xl">
          <Utensils className="h-5 w-5 shrink-0 text-[#B87943] sm:h-6 sm:w-6" />
          <span>Quick Filter by Primary Ingredient</span>
        </h2>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">
          {featuredCategories.map((cat) => (
            <Link
              to={`/search/${cat}`}
              key={cat}
              onClick={() => filterByCategory(cat)}
              className="flex min-h-14 items-center justify-center rounded-xl border border-[#E8D8C4] bg-white px-2 py-3 text-center text-sm font-semibold text-[#603719] shadow-sm shadow-[#603719]/5 transition duration-300 hover:scale-[1.03] hover:border-[#C99A70] hover:bg-[#F8EFE4] hover:text-[#A96D3A] hover:shadow-md hover:shadow-[#603719]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87943] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF5ED] sm:min-h-16 sm:px-4 sm:py-4 sm:text-base"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CategorySelection
