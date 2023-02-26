import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Form from './components/Form'
import Genres from './components/Genres'
import Footer from './components/Footer'


const App = () => {

  const genres = [
    'Action',
    'Adventure',
    'Comedy',
    'Drama',
    'Horror',
    'Romance',
    'Science Fiction',
    'Thriller',
    'Fantasy'
  ]

  const [movies, setMovies] = useState([])

  const newMovie = (movie) => {
    setMovies([...movies, movie])
  }

  return (
    <div>
      <Banner />
      <Form 
        genres={genres}
        movie={movie => newMovie(movie)}
      />
      {genres.map((genre) => (
        <Genres 
          key={genre}
          name={genre}
          movies={movies.filter(movie => movie.genres === genre)}
        />
      ))}
      <Footer />
    </div>
  )
}

export default App
