import './DropDown.css'

const DropDown = (props) => {
    return(
        <div className='drop-down'>
            <label>{props.label}</label>
            <select
                value={props.value}
                onChange={event => props.onChange(event.target.value)}
                required={props.required}
            >
                <option value=""></option>
                {props.itens.map(item => (
                     <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default DropDown