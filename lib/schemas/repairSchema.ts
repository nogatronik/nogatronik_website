import { z } from "zod";

export const repairSchema = z.object({
  brand: z.string().min(1, "Brand is required").max(50, "Brand too long"),
  model: z.string().min(1, "Model is required").max(50, "Model too long"),
  modelNumber: z.string().max(50, "Model number too long").optional(),
  issueTitle: z
    .string()
    .min(5, "Issue title must be at least 5 characters")
    .max(100, "Issue title too long"),
  issueDate: z
    .string()
    .optional()
    .transform((val) => (val ? new Date(val) : null)),
  previousWork: z
    .string()
    .min(2, "Answer too short")
    .max(100, "Previous work field too long"),
  issueOcccurance: z
    .string()
    .min(3, "Please specify the issue's occurance")
    .max(50, "Occurrence description too long")
    .optional(),
  warranty: z
    .string()
    .min(2, "Answer too short")
    .max(20, "Answer too long")
    .optional(),
  prefferedDelivery: z
    .string()
    .min(2, "Answer too short")
    .max(100, "Answer too long")
    .optional(),
  preferredContactMethod: z
    .string()
    .min(2, "Answer too short")
    .max(50, "Answer too long")
    .optional(),
  issueDescription: z
    .string()
    .min(10, "Please provide a detailed description of the issue")
    .max(1000, "Description too long"),
});
