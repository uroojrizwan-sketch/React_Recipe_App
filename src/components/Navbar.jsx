import React, { useState } from 'react'
import { ChefHat, Search } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ handleSearch }) => {
  const [input, setInput] = useState("")
  const navigate = useNavigate()

  const searchHandle = (e) => {
    e.preventDefault()

    if (input.trim()) {
      handleSearch(input.trim())
      navigate(`/search/${input}`)
      setInput("")
    }
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-[#E8D8C4] bg-[#FAF5ED]/95 shadow-sm shadow-[#603719]/10 backdrop-blur-md">

      <div className="mx-auto max-w-7xl px-3 sm:px-5 lg:px-8">

        <div className="flex min-h-16 flex-wrap items-center justify-between gap-x-3 gap-y-3 py-3 sm:gap-5">

          {/* Logo */}
          <Link
            to="/"
            className="flex shrink-0 items-center text-xl font-black tracking-wide text-[#603719] transition duration-300 hover:text-[#A96D3A] sm:text-2xl lg:text-3xl"
          >
            <ChefHat className="mr-1.5 h-7 w-7 text-[#B87943] sm:mr-2 sm:h-8 sm:w-8" />

            <span className="text-[#A96D3A]">Chef</span>
            <span>Food</span>
          </Link>

          {/* Responsive Search */}
          <form
            onSubmit={searchHandle}
            className="flex w-full min-w-0 sm:w-auto sm:max-w-md sm:flex-1 lg:max-w-lg"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Search your food here!"
              aria-label="Search recipes"
              className="min-w-0 flex-1 rounded-l-full border border-r-0 border-[#E2D0BA] bg-white px-3 py-2.5 text-sm text-[#4A2C1A] shadow-sm transition placeholder:text-[#A18A76] focus:border-[#B87943] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#B87943]/25 sm:px-5 sm:text-base"
            />

            <button
              type="submit"
              aria-label="Search recipes"
              className="flex shrink-0 items-center justify-center rounded-r-full bg-[#603719] px-4 py-2.5 text-white shadow-sm transition duration-300 hover:bg-[#7A4A2A] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#B87943] focus:ring-offset-2 focus:ring-offset-[#FAF5ED] sm:px-5"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>

        </div>

      </div>
    </nav>
  )
}

export default Navbar
