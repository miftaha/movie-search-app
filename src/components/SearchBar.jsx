/* eslint-disable react/prop-types */
import { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch(searchTerm)
    setSearchTerm('')
  }
  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-3 ">
      <input
        type="text"
        placeholder="Enter Movie Name"
        name="search"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value)
        }}
        className="border rounded-2xl w-full max-w-xl shadow-md p-3 outline-none"
      />
      <button className="bg-blue-500  p-3 text-white  rounded-xl">
        Search
      </button>
    </form>
  )
}

export default SearchBar
