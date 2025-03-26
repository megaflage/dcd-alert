import { z } from "zod";

export const newContactSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().min(9),
});
