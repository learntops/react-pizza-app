import type { FormSchema } from "@/schema/formSchema";
import { useFieldArray, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SelectSize from "./SelectSize";
const AddPizza = () => {
  const { control, register } = useFormContext<FormSchema>();

  const {
    fields: pizzaFields,
    append: appendPizza,
    remove: removePizza,
  } = useFieldArray({
    control,
    name: "pizzas",
  });

  const onAddPizza = () => {
    appendPizza({
      name: "",
      size: "",
      toppings: [],
    });
  };
  return (
    <div className="mt-5">
      <div
        className="flex justify-between cursor-pointer "
        onClick={onAddPizza}
      >
        <h3>Choose your pizzas</h3>
        <p className="text-green-400">+ Add pizza</p>
      </div>
      {pizzaFields.map((pizza, pizzaIndex) => (
        <div key={pizzaIndex}>
          {/* <h2>Add pizza{pizzaIndex + 1}</h2>
          <Input
            {...register(`pizzas.${pizzaIndex}.name` as const)}
            placeholder="Step title"
            defaultValue={pizza.name ?? ""}
            className="mb-2"
          /> */}

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex items-center justify-center">
                <span className="text-green-400 font-medium">&#10003;</span>
                Pizza {pizzaIndex + 1}
              </AccordionTrigger>
              <AccordionContent>
                <SelectSize />
                <button type="button" onClick={() => removePizza(pizzaIndex)}>
                  Remove
                </button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default AddPizza;
