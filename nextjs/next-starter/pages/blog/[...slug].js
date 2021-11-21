import { useRouter } from "next/router";
function BlogPostsPage() {
  const { query } = useRouter();
  console.log(query);
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}

export default BlogPostsPage;
