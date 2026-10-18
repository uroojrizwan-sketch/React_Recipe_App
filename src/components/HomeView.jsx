import React from 'react'
import RecipeSlider from './RecipeSlider'
import TrendingRecipe from './TrendingRecipe'
import CategorySelection from './CategorySelection'
import { API_URL } from './useFetch'

const HomeView = ({ filterByCategory }) => {
  return (
    <>
      <main className="mx-auto w-full max-w-7xl px-3 py-4 sm:px-5 sm:py-6 lg:px-8 lg:py-8">
        <RecipeSlider
          title="Staff Curated Picks"
          fetchUrl={`${API_URL}search.php?f=c`}
        />

        <TrendingRecipe
          title="Quick & Easy Meals"
          fetchUrl={`${API_URL}filter.php?a=Canadian`}
        />

        <CategorySelection filterByCategory={filterByCategory} />
      </main>
    </>
  )
}

export default HomeView
