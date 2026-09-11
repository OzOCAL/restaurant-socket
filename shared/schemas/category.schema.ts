import * as z from "zod";

export const Category = z.enum([
  "Starter",
  "Dish",
  "Dessert",
  "Drink",
]);