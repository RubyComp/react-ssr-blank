'use client';
import './Button.scss'

const Button = ({text, onClick, disabled}) => {
	return (
		<button className="Button" {...{onClick, disabled}}>
			{text}
		</button>
	)
}

export default Button