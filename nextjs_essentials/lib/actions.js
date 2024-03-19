"use server";

import { saveMeal } from "./meals";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import isEmail from "validator/es/lib/isEmail";

export async function ShareMealAction(prevState, formDate) {
  "use server";
  const meal = {
    creator: formDate.get("name"),
    creator_email: formDate.get("email"),
    title: formDate.get("title"),
    summary: formDate.get("summary"),
    instructions: formDate.get("instructions"),
    image: formDate.get("image"),
  };

  if (
    !isEmail(meal.creator_email) ||
    isEmpty(meal.creator) ||
    isEmpty(meal.title) ||
    isEmpty(meal.summary) ||
    isEmpty(meal.summary) ||
    meal.image.size === 0
  ) {
    return {
      message: "Please enter valid input",
    };
  }

  await saveMeal(meal);
  revalidatePath("/meals"); //remove cache data & load fresh data on demand for '/meals' page
  redirect("/meals");
}
