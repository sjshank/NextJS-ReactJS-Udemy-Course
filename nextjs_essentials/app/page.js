import Link from "next/link";
import classes from "./page.module.css";
import ImageSlideshow from "@/components/image-slideshow/image-slideshow";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={classes.hero}>
            <h1>Next Foodies</h1>
            <p>Enter the world of foodies & experience the taste.</p>
          </div>
          <div className={classes.cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it Works</h2>
          <p>
            Next Foodies is a platform for foodies to share their favorite
            recipes with the world.
          </p>
          <p>
            Next Foodies is a place to discover new dishes, and to connect with
            other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
