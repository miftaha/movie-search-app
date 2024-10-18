import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */

const MovieDetails = ({ movie }) => {
  return (
    <div className="container mx-auto p-6 flex flex-col lg:flex-row items-start justify-center gap-6">
      <img
        src={
          movie.Poster !== 'N/A'
            ? movie.Poster
            : 'https://via.placeholder.com/300'
        }
        alt={movie.Title}
        className="w-full lg:w-1/3 h-96 object-cover rounded-lg"
      />
      <div className="lg:w-2/3">
        <h1 className="text-2xl font-bold mb-4">{movie.Title}</h1>
        <p className="text-gray-700">
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p className="text-gray-700 my-4 ">
          <strong>Plot:</strong> {movie.Plot}
        </p>
        <p className="text-gray-700">
          <strong>Cast:</strong> {movie.Actors}
        </p>
        <p className="text-gray-700">
          <strong>Ratings:</strong> {movie.imdbRating}
        </p>
        <Link
          to={'/'}
          className="text-lg rounded-lg text-white p-2   px-4 inline-block text-center  shadow-md bg-blue-500 hover:underline mt-10"
        >
          Back to Movie
        </Link>
      </div>
    </div>
  )
}

export default MovieDetails
