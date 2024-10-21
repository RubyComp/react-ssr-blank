import Link from "next/link"

const page = () => {
	return (
		<div className="page">
			<div className="container">
				<h1>Home Page</h1>
				<ul>
					<li>
						<Link href="/test">Test Page</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default page