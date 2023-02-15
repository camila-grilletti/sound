import './Button.css';


const Button = ({type, nameButton, onclick}) => {

    return (
        <button type={type} className='button' onClick={onclick}>{nameButton}</button>
    )

}


export default Button;