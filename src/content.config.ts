import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/*
title - optional description
planted - when first written
tended - last update
growth - seedling, budding, evergreen
topics - an array

*/
const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    // your turn — encode the fields above
    title: z.string(),
    planted: z.coerce.date(),
    tended: z.coerce.date(),
    growth: z.enum(["seedling", "budding", "evergreen"]).default("seedling"),
    topics: z.array(z.string())
  }),
});

export const collections = { notes };