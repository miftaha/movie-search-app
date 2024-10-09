import { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
const Home = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([])
  const [Loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchMovieData = async () => {
      if (!searchTerm) return
      try {
        setLoading(true)
        const response = await fetch(
          `http://www.omdbapi.com/?s=${searchTerm}&apikey=615c1a03`
        )
        const data = await response.json()
        if (data.Response === 'True') {
          setLoading(false)
          setMovies(data.Search)
        } else {
          setMovies([])
          setLoading(false)
          setError(data.Error)
        }
      } catch (err) {
        console.log('Network Error Ocurred')
      }
    }
    fetchMovieData()
  }, [searchTerm])

  if (Loading) {
    return (
      <div>
        <p className="text-center text-2xl font-bold p-5">Loading...</p>
      </div>
    )
  }
  return (
    <div className="container mx-auto p-6">
      <SearchBar onSearch={setSearchTerm} />
      {error && <p className="text-center text-2xl font-bold p-5">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies &&
          movies.map((movie) => <MovieCard movie={movie} key={movie.imdbID} />)}
      </div>
    </div>
  )
}

export default Home
