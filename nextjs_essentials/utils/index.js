import slugify from "slugify";
import xss from "xss";
import { customAlphabet } from "nanoid";

export const slugifiedTitle = (title) => {
  const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 7);
  const _title = `${title}-${nanoid()}`;
  return slugify(_title, { lower: true });
};

export const sanitizedData = (instructions) => xss(instructions);
