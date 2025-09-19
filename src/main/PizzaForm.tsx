import { formSchema, type FormSchema } from "@/schema/formSchema";
import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomerInfo from "./CustomerInfo";
import { Button } from "@/components/ui/button";
import AddPizza from "./AddPizza";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

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
      pizzas: [],
    },
  });
  const { handleSubmit } = form;
  const onSubmit: SubmitHandler<FormSchema> = (values) => {
    console.log(values);
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-700">
              Enter your details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CustomerInfo />
            <AddPizza />
            <Button type="submit">Order now</Button>
          </CardContent>
        </Card>
      </form>
    </FormProvider>
  );
};

export default PizzaForm;
