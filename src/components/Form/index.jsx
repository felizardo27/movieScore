import Button from '../Button'
import DropDown from '../DropDown'
import Input from '../Input'
import './Form.css'

const Form = () => {

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

    return(
        <section className='form'>
            <form>
                <h2>Fill out form for movie score card.</h2>
                <Input 
                    label={'Movie title'}
                    placeholder={'Enter your movie title'}
                    required={true}
                />

                <Input 
                    type={'number'}
                    label={'Score'}
                    placeholder={'Enter the movie score'}
                    required={true}
                />
                <Input 
                    label={'Image'}
                    placeholder={'Enter the image URL'}
                    required={true}
                />
                <DropDown 
                    label={'Genre'}
                    required={true}
                    itens={genre}
                    value={genre}
                />
                <Button>Create Card</Button>
            </form>
        </section>
    )
}

export default Form