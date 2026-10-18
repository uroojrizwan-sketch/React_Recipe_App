
import React from 'react'
import { useFetch } from './useFetch'
import { Link } from 'react-router-dom'

import SlickModule from 'react-slick'
const Slider = SlickModule.default || SlickModule

import { Clock, Loader } from 'lucide-react'

const TrendingSlider = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl)
  const meals = data?.meals || []

  const settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    appendDots: () => null,
    customPaging: () => null,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-2 px-4 py-8 text-center text-[#7A5B45] sm:py-10">
        <Loader className="h-5 w-5 animate-spin text-[#B87943]" />
        Loading {title}...
      </div>
    )
  }

  return (
    <>
      <section className="mx-auto mt-4 w-full sm:mt-6">
        <h2 className="mb-5 flex items-center gap-2 border-l-4 border-[#B87943] pl-3 text-xl font-bold tracking-tight text-[#603719] sm:mb-6 sm:gap-3 sm:pl-4 sm:text-2xl lg:text-3xl">
          <Clock className="h-5 w-5 shrink-0 text-[#B87943] sm:h-6 sm:w-6" />
          <span>{title}</span>
        </h2>

        <div className="mx-auto w-full px-1 sm:px-2">
          <Slider {...settings}>
            {meals.map((meal) => (
              <div key={meal.idMeal} className="px-1.5 pb-5 pt-2 sm:px-2 md:px-3">
                <Link
                  to={`/recipe/${meal.idMeal}/`}
                  aria-label={`View recipe: ${meal.strMeal}`}
                  className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87943] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF5ED]"
                >
                  <div className="group relative h-full cursor-pointer overflow-hidden rounded-xl border border-[#E8D8C4] bg-white shadow-sm shadow-[#603719]/5 transition duration-300 hover:-translate-y-1 hover:border-[#C99A70] hover:shadow-lg hover:shadow-[#603719]/10">
                    <div className="pointer-events-none absolute inset-0 z-10 rounded-xl border-2 border-transparent transition duration-300 group-hover:border-[#C99A70]/60" />

                    <div className="flex items-center justify-center p-2 sm:p-3">
                      <img
                        src={meal?.strMealThumb}
                        alt={meal?.strMeal || "Recipe"}
                        loading="lazy"
                        className="aspect-square w-full rounded-lg border border-[#E8D8C4] object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default TrendingSlider
