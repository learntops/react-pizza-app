import { formSchema, type FormSchema } from "@/schema/formSchema";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomerInfo from "./CustomerInfo";
import { Button } from "@/components/ui/button";

const PizzaForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      email: "",
      confirmEmail: "",
      postCode: "",
      contactNumber: "",
    },
  });
  const { handleSubmit } = form;
  const onSubmit: SubmitHandler<FormSchema> = (values) => {
    console.log(values);
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
        <CustomerInfo />
        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
  );
};

export default PizzaForm;
