import { useRouter } from "next/router";
function BlogPage() {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div>
      <h1>Blog Page : Catch all route - {slug?.join("/")}</h1>
    </div>
  );
}

export default BlogPage;
