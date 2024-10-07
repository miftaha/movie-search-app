import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetails from './components/MovieDetails'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
