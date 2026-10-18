import React, { useCallback, useState } from 'react'
import RecipeDetailView from './components/RecipeDetailView'
import SearchView from './components/SearchView'
import Cuisine from './components/Cuisine'
import HomeView from './components/HomeView'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export const API_URL = "https://www.themealdb.com/api/json/v1/1/"

const App = () => {
  const [searchResult, setSearchResult] = useState([])
  const [searchLoading, setSearchLoading] = useState(false)

  const filterRecipe = useCallback(async (query, filterType) => {

    setSearchResult([])
    setSearchLoading(true)

    try {

      const res = await fetch(`${API_URL}filter.php?${filterType}=${query}`)
      if (!res.ok) throw new Error(`Error: ${res.status}`)
      const result = await res.json()
      setSearchResult(result?.meals || [])

      console.log("API meals:", result.meals)
    } catch (error) {

    } finally {
      setSearchLoading(false)
    }

  }, [])

  // filter by category

  const filterByCategory = useCallback((category) => {
    filterRecipe(category, "c")
  }, [filterRecipe])

  // filter by area

  const filterByArea = useCallback((area) => {
    filterRecipe(area, "a")
  }, [filterRecipe])

  const handleSearch = useCallback(async (query) => {

    setSearchResult([])
    setSearchLoading(true)

    try {

      const res = await fetch(`${API_URL}search.php?s=${query}`)
      if (!res.ok) throw new Error(`Error: ${res.status}`)
      const result = await res.json()
      setSearchResult(result?.meals || [])
    } catch (error) {

    } finally {
      setSearchLoading(false)
    }

  }, [])

  return (
    <>
      <Router>
        <div className="min-h-screen bg-[#FAF5ED] font-sans text-[#4A2C1A]">
          <Navbar handleSearch={handleSearch} />
          <Cuisine filterByArea={filterByArea} />
          <Routes>
            <Route
              path="/"
              element={<HomeView filterByCategory={filterByCategory} />}
            />
            <Route
              path="/recipe/:id"
              element={<RecipeDetailView />}
            />
            <Route
              path="/search/:query"
              element={
                <SearchView
                  meals={searchResult}
                  loading={searchLoading}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
