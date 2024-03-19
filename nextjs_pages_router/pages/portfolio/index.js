import { useRouter } from "next/router";
function PortfolioPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Portfolio Page</h1>
      <p onClick={() => router.push("/")}>Back To Home</p>
    </div>
  );
}

export default PortfolioPage;
