import './DropDown.css'

const DropDown = (props) => {
    console.log(props)
    return(
        <div className='drop-down'>
            <label>{props.label}</label>
            <select>
                <option value=""></option>
                {props.itens.map(item => (
                     <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}

export default DropDown