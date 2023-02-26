import { useState } from 'react'
import Button from '../Button'
import DropDown from '../DropDown'
import Input from '../Input'
import './Form.css'

const Form = (props) => {

    const [title, setTitle] = useState('')
    const [score, setScore] = useState('')
    const [image, setImage] = useState('')
    const [genre, setGenre] = useState('')

    const submit = (e) => {
        e.preventDefault()

        props.movie({
            title,
            score,
            image,
            genre
        })
        setTitle('')
        setScore('')
        setImage('')
        setGenre('')
    }
    return(
        <section className='form'>
            <form onSubmit={submit}>
                <h2>Fill out form for movie score card.</h2>
                <Input 
                    label={'Movie title'}
                    placeholder={'Enter your movie title'}
                    required={true}
                    value={title}
                    onChange={value => setTitle(value)}
                />

                <Input 
                    type={'number'}
                    label={'Score'}
                    placeholder={'Enter the movie score'}
                    required={true}
                    value={score}
                    onChange={value => setScore(value)}
                />
                <Input 
                    label={'Image'}
                    placeholder={'Enter the image URL'}
                    required={true}
                    value={image}
                    onChange={value => setImage(value)}
                />
                <DropDown 
                    label={'Genre'}
                    required={true}
                    onChange={value => setGenre(value)}
                    itens={props.genre}
                    value={genre}
                />
                <Button>Create Card</Button>
            </form>
        </section>
    )
}

export default Form