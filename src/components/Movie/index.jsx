import './Movie.css'

const Movie = ({title, score, image}) => {
    return(
        <div className='movie'>
            <div className='header'>
                <img 
                    src={image} 
                    alt={title} 
                />
            </div>
            <div className="footer">
                <h4>{title}</h4>
                <h5>Score: {score}</h5>
            </div>
        </div>
    )
}

export default Movie