import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-blue-500 ">
      <div className="flex justify-between items-center container mx-auto p-6">
        <h1 className="text-black font-semibold">
          <NavLink to={'/'}>MovieSearchApp</NavLink>
        </h1>

        <ul className="flex gap-5">
          <li>
            <NavLink
              to={'/'}
              className="text-black font-medium hover:text-gray-700 duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/movie/:id'}
              className="text-black font-medium hover:text-gray-700 duration-300"
            >
              MovieDetails
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
