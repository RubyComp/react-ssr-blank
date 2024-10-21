import { render, screen } from '@testing-library/react'
import Test from '@/app/test/test'

describe('Test Page', () => {
	it('renders Test page without crashing', () => {
		render(<Test />)
		const heading = screen.getByText(/Test Page/i)
		expect(heading).toBeInTheDocument()
	})
})
