
# Para una ruta API

# app/api/users/[id]/route.ts

```jsx
	import { NextResponse } from 'next/server';

	export async function GET(request, { params }) {
		const { id } = params;
		return NextResponse.json({ message: `User ID: ${id}` });
	}
```

# Para una ruta de Page

# app/blog/[slug]/page.tsx

<!-- /blog/my-first-post -->

```jsx
	import { useParams } from 'next/navigation';

	export default function BlogPost() {
		const { slug } = useParams();

		return (
			<div>
				<h1>Blog Post: {slug}</h1>
			</div>
		);
	}
```

# Mas de un parametro

# app/blog/[slug]/[id]/page.tsx

<!-- /blog/my-first-post/1 -->

```jsx
	// 
	import { useParams } from 'next/navigation';

	export default function BlogDetail() {
		const { slug, id } = useParams();

		return (
			<div>
				<h1>Blog Post: {slug}</h1>
				<p>Post ID: {id}</p>
			</div>
		);
	}
```

# Parametro opcional

# app/blog/[[slug]]/page.jsx

<!-- /blog/my-first-post -->
<!-- /blog/ -->

```jsx
	import { useParams } from 'next/navigation';

	export default function BlogPost() {
		const params = useParams();
		const slug = params.slug;

		return (
			<div>
				{
					slug ? (
						<h1>Blog Post: {slug}</h1>
					) : (
						<h1>Welcome to the Blog</h1>
					)
				}
			</div>
		);
	}
```