'use client';
import Button from "@/components/Button/Button"
import Link from "next/link"

const Test = () => {

	const onButtonClick = () => {
		alert('ok')
	}

	return (
		<div className="test">
			<div className="container">
				<header>
					<h1>Test Page</h1>
					<code>Test</code>
				</header>
				<div>
					<h2>H2 – Title</h2>
					<h3>H3 – Title</h3>
					<h4>H4 – Title</h4>
					<h5>H5 – Title</h5>
				</div>
				<div>
					<Link href="/">to Home</Link>
					<Button
						text="Test Button"
						onClick={onButtonClick}
					/>
					<div className="test-font">
						If this text is red, fonts loaded successfully.
					</div>
				</div>
			</div>
		</div>
	)
}

export default Test