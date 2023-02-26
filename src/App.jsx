import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Form from './components/Form'

const App = () => {

  const genre = [
    'Action',
    'Adventure ',
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
        genre={genre}
        movie={movie => newMovie(movie)}
      />
    </div>
  )
}

export default App
