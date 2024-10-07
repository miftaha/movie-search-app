import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
const Home = () => {
  const [movies, setMovies] = useState([])
  const [Loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchMovieData = async (searchTerm) => {
    try {
      setLoading(true)
      const response = await fetch(
        `http://www.omdbapi.com/?s=${searchTerm}&apikey=615c1a03`
      )
      const data = await response.json()
      setLoading(false)
      setMovies(data.Search)
    } catch (error) {
      setError('Failed to fetch movies. Try again.')
    }
  }

  if (Loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }
  return (
    <div className="container mx-auto p-6">
      {error && <p>{error}</p>}
      <SearchBar onSearch={fetchMovieData} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies &&
          movies.map((movie) => <MovieCard movie={movie} key={movie.imdbID} />)}
      </div>
    </div>
  )
}

export default Home
