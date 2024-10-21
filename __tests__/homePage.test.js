import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Page', () => {
	it('renders Home page without crashing', () => {
		render(<Home />)

		const heading = screen.getByText(/Home Page/i)
		expect(heading).toBeInTheDocument()
	})
})

