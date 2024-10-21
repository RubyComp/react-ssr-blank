import '@/style/style.scss'

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

const RootLayout = ({ children }) => {
	return (
		<html lang="ru">
			<body>
				{children}
			</body>
		</html>
	)
}

export default RootLayout