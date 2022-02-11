import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return (
        <button onClick={onClick} className='btn' style = {{backgroundColor : color}}>{text}</button>
    )
}

Button.defaultPros= {
    color : 'steelblue'
}

export default Button
