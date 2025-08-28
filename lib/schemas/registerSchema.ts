import { z } from "zod";

const passwordRules = (password: string) => {
  let count = 0;
  if (/[A-Z]/.test(password)) count++;
  if (/[a-z]/.test(password)) count++;
  if (/[0-9]/.test(password)) count++;
  if (/[^A-Za-z0-9]/.test(password)) count++;
  return count;
};

export const registerSchema = z.object({
  fName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters long" })
    .max(50, { message: "First name must be at most 50 characters long" }),
  lName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long" })
    .max(50, { message: "Last name must be at most 50 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  pwd: z
    .string()
    .min(12, { message: "Password must be at least 12 characters long" })
    .max(100, { message: "Password must be at most 100 characters long" })
    .refine((val) => passwordRules(val) >= 3, {
      message:
        "Password must include at least three of the following: uppercase letters, lowercase letters, numbers, or symbols",
    }),
});
