import { z } from "zod";

export const formSchema = z
  .object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    confirmEmail: z
      .string()
      .email({ message: "Please confirm with a valid email." }),
    address: z
      .string()
      .min(5, { message: "Address must be at least 5 characters." }),
    postCode: z
      .string()
      .min(4, { message: "Postcode must be at least 4 digits." })
      .regex(/^\d+$/, { message: "Postcode must be numeric." }),
    contactNumber: z
      .string()
      .min(10, { message: "Contact number must be at least 10 digits." })
      .regex(/^\+?\d+$/, { message: "Invalid contact number format." }),
    pizzas: z
      .array(
        z.object({
          name: z.string().optional(),
          size: z.string().optional(),
          toppings: z.array(z.string()).default([]),
        })
      )
      .min(1, { message: "You must add at least one pizza." })
      .default([]),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Emails do not match.",
    path: ["confirmEmail"],
  });

export type FormSchema = z.infer<typeof formSchema>;
