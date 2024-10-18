import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetailsPage from './pages/MovieDetailsPage'
// import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
