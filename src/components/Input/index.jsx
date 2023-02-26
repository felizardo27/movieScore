import './Input.css'

const Input = (props) => {
   return(
    <div className="input-text">
        <label>{props.label}</label>
        <input
            type={props.type ? props.type : 'text'}
            placeholder={props.placeholder}
            required={props.required}
        />
    </div>
   )
}

export default Input

