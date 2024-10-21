import Button from './Button'

const meta = {
	component: Button,
	argTypes: {
		disabled: {
			control: 'boolean',
			description: 'Устанавливает атрибут disabled для кнопки',
			defaultValue: false,
		},
	},
}

export default meta

export const Default = {
	args: {
		text: 'Some Text',
		disabled: false
	}
}