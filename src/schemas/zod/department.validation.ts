import { z } from "zod";

export const departmentValidation = z.object({
  name: z.string().min(1, "Name cannot be empty"),
  banglaName: z.string().min(1, "Bangla Name cannot be empty"),
  iconUrl: z.string().url("Invalid URL format"),
  description: z.string().optional(),
  displayOrder: z.number().optional(),
  isActive: z.boolean().optional(),
});

export type DepartmentDto = z.infer<typeof departmentValidation>;
