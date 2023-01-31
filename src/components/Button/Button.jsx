import './Button.css';


const Button = ({type, value}) => {

    return (
        <button type={type} className='button'>{value}</button>
    )

}


export default Button;