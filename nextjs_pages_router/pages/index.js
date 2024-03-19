import Link from "next/link";
function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
          <br />
          <Link href="/blog/2002/11/hello">Blog Post</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
