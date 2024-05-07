import { z } from 'zod';

export type Category = z.infer<typeof CategorySchema>;
export const CategorySchema = z.object({
  id: z.number(),
  name: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
