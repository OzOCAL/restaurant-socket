import * as z from "zod";

export const Role = z.enum(["Manager", "Cook", "Waiter"]);

export type Role = z.infer<typeof Role>;