import * as z from "zod"; 
import { Role }  from "./role.schema";

const User = z.object({ 
  username: z.string(),
  password: z.string(),
  role: Role,
});

export type User = z.infer<typeof User>;