import Link from "next/link"

const page = () => {
	return (
		<div className="page">
			<code>page</code>
			<h1>Home Page</h1>
			<ul>
				<li>
					<Link href="/test">Test Page</Link>
				</li>
			</ul>
		</div>
	)
}

export default page