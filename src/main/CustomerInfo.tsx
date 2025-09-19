// components/CustomerInfo.tsx
import type { FormSchema } from "@/schema/formSchema";
import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type FieldConfig = {
  name: keyof FormSchema;
  label: string;
  placeholder: string;
  type: string;
};

const customerInfoFields: FieldConfig[] = [
  { name: "name", label: "NAME *", placeholder: "John Smith", type: "text" },
  {
    name: "email",
    label: "EMAIL *",
    placeholder: "Enter your email",
    type: "email",
  },
  {
    name: "confirmEmail",
    label: "CONFIRM EMAIL *",
    placeholder: "Confirm your email",
    type: "email",
  },
  {
    name: "address",
    label: "ADDRESS *",
    placeholder: "44 Pizza Street",
    type: "text",
  },
  { name: "postCode", label: "POSTCODE *", placeholder: "1234", type: "text" },
  {
    name: "contactNumber",
    label: "CONTACT NUMBER *",
    placeholder: "+63912345678",
    type: "text",
  },
];

const CustomerInfo = () => {
  const { control } = useFormContext<FormSchema>();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {customerInfoFields.map(({ name, label, placeholder, type }) => (
        <FormField
          key={name}
          control={control}
          name={name}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="text-sm font-medium text-gray-700">
                {label}
              </FormLabel>
              <FormControl>
                <Input
                  type={type}
                  placeholder={placeholder}
                  {...field}
                  value={field.value ?? ""}
                  onChange={(e) => field.onChange(e.target.value)}
                  className="w-full"
                />
              </FormControl>
              <FormMessage className="text-xs text-red-500 mt-1" />
            </FormItem>
          )}
        />
      ))}
    </div>
  );
};

export default CustomerInfo;
