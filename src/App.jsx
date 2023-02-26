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

  return (
    <div>
      <Banner />
      <Form 
        genre={genre}
      />
    </div>
  )
}

export default App
