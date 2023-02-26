import Movie from '../Movie'
import './Genres.css'

const Genres = (props) => {
    return(
        (props.movies.length > 0) ? 
            <section className='genres'>
            <h3>{props.name}</h3>
            <div className="movies">
                {props.movies.map((movie, key) => (
                    <Movie 
                        key={key}
                        title={movie.title}
                        score={movie.score}
                        image={movie.image}
                    />
                ))}
            </div>
        </section>  : ''
        
    )
}

export default Genres