import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
const MovieCard = ({ movie }) => {
  return (
    <div className=" border rounded-lg p-4 mt-4 shadow-2xl">
      <div className="mb-3">
        <img
          src={
            movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://via.placeholder.com/300'
          }
          className="object-cover rounded-lg h-64 w-full"
        />
      </div>

      <h3 className="text-md font-bold mt-1 ">{movie.Title}</h3>
      <h3 className="text-md text-gray-700 ">{movie.Year}</h3>
      <Link
        to={`/movie/${movie.imdbID}`}
        className="text-lg rounded-lg text-white p-2  mt-2 px-4 inline-block text-center  w-full shadow-md bg-blue-500 hover:underline"
      >
        Movie Details
      </Link>
    </div>
  )
}

export default MovieCard
