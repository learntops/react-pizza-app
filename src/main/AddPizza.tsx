import type { FormSchema } from "@/schema/formSchema";
import { useFieldArray, useFormContext } from "react-hook-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SelectSize from "./SelectSize";
const AddPizza = () => {
  const { control } = useFormContext<FormSchema>();

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
        <h3 className="text-gray-700">Choose your pizzas</h3>
        <p className="text-green-400">
          <span className="font-extrabold text-lg">+</span> Add pizza
        </p>
      </div>
      {pizzaFields.map((pizza, pizzaIndex) => (
        <div key={pizzaIndex}>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="flex items-center justify-center">
                <div className="flex flex-row-reverse gap-2">
                  <span className="text-green-400 font-semibold">&#10003;</span>

                  <h2 className="text-gray-600">
                    Pizza
                    <span className="ml-0.5">{pizzaIndex + 1}</span>
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <SelectSize pizzaIndex={pizzaIndex} />
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
