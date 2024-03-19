import { getMeals } from "@/lib/meals";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { Suspense } from "react";

export const metadata = {
  title: "All Meals",
  description: "Browser all the delicious meals",
};

const Meals = async () => {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
};

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meal,
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe and cook it !</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}