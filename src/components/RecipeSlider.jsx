
import React from 'react'
import { useFetch } from './useFetch'
import RecipeCard from './RecipeCard'

import SlickModule from 'react-slick'
const Slider = SlickModule.default || SlickModule

import { Clock, Loader } from 'lucide-react'

const RecipeSlider = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl)
  const meals = data?.meals || []

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:1500,
    cssEase: "linear",
    adaptiveHeight: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-2 px-4 py-10 text-center text-[#7A5B45]">
        <Loader className="h-5 w-5 animate-spin text-[#B87943]" />
        Loading {title}...
      </div>
    )
  }

  return (
    <>
      <section className="mx-auto mt-6 w-full max-w-7xl px-3 sm:mt-8 sm:px-5 lg:px-8">
        <h2 className="mb-5 flex items-center gap-3 border-l-4 border-[#B87943] pl-3 text-xl font-bold tracking-tight text-[#603719] sm:mb-6 sm:pl-4 sm:text-2xl lg:text-3xl">
          <Clock className="h-5 w-5 shrink-0 text-[#B87943] sm:h-6 sm:w-6" />
          <span>{title}</span>
        </h2>

        <div className="mx-auto w-full px-1 pb-8 sm:px-2">
          <Slider {...settings}>
            {meals.map((meal) => (
              <div key={meal.idMeal} className="h-full px-2 py-3 sm:px-3">
                <div className="flex h-full [&>a]:flex [&>a]:h-full [&>a]:w-full [&>a>div]:h-full">
                  <RecipeCard meal={meal} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  )
}

export default RecipeSlider
