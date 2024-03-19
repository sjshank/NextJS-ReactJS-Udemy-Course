import fs from "node:fs";
import sql from "better-sqlite3";
import { sanitizedData, slugifiedTitle } from "@/utils";

const db = sql("meals.db");

export function getMeals() {
  // throw new Error("errorrrr"); // To test error.js page for meals
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugifiedTitle(meal.title); // Slugifies a String
  meal.instructions = sanitizedData(meal.instructions); //Sanitize untrusted HTML

  //Storing image under public folder
  const ext = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${ext}`;
  //write image stream
  const stream = fs.createWriteStream(`public/assets/${fileName}`);
  const bufferedImg = await meal.image.arrayBuffer();
  stream.write(Buffer.from(bufferedImg), (err) => {
    if (err) throw new Error("Saving image failed");
  });
  meal.image = `/assets/${fileName}`;

  //saving record in db
  db.prepare(
    `INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug)
    VALUES (@title, @summary, @instructions, @creator, @creator_email, @image, @slug)`
  ).run(meal);
}
