import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import MovieDetails from '../components/MovieDetails'
const MovieDetailsPage = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [error, setError] = useState(null)

  console.log(id)
  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?i=${id}&apikey=615c1a03`
        )
        const data = await response.json()
        console.log(data)

        setMovie(data)
      } catch (error) {
        setError(error)
      }
    }
    fetchMovieDetails()
  }, [id])
  console.log(movie)
  return (
    <>
      {error && <p>{error}</p>}
      <div>{movie && <MovieDetails movie={movie} />}</div>
    </>
  )
}

export default MovieDetailsPage
