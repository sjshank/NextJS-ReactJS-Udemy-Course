import Link from "next/link";

export default function Home() {
  return (
    <div>
    <h2>Hello World</h2>
    <div>
      <Link href="users">Users</Link>
    </div>
    </div>
  )
}

