import Button from "@/components/Button/Button"
import Link from "next/link"

const Test = () => {
	return (
		<div className="test">
			<code>Test</code>
			<div>test</div>
			<Link href="/">to Home</Link>
			<Button text="Test Button" />
		</div>
	)
}

export default Test