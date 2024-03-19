import Link from "next/link";
import { Links } from "./components/Links";


export default function Home() {
  console.log(process.env.NEXT_PUBLIC_ENV_VARIABLE);

  return (
    <section>
      <h1>Hello, Home page! {process.env.NEXT_PUBLIC_ENV_VARIABLE}</h1>
      {/* Route sgement will be automatically prefetched */}
      <Link href="/dashboard">Go to Dashboard</Link>
      <br />
      <Links />
    </section>
  );
}

