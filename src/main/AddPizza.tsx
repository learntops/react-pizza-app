import type { FormSchema } from "@/schema/formSchema";
import { useFieldArray, useFormContext } from "react-hook-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SelectSize from "./SelectSize";
import { useState } from "react";
const AddPizza = () => {
  const { control } = useFormContext<FormSchema>();
  const [openPizza, setOpenPizza] = useState<string | undefined>(undefined);

  const {
    fields: pizzaFields,
    append: appendPizza,
    remove: removePizza,
  } = useFieldArray({
    control,
    name: "pizzas",
  });

  const onAddPizza = () => {
    const newIndex = pizzaFields.length;
    appendPizza({
      name: "",
      size: "",
      toppings: [],
    });

    setOpenPizza(`pizza-${newIndex}`);
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
      <Accordion
        type="single"
        collapsible
        value={openPizza}
        onValueChange={setOpenPizza}
      >
        {pizzaFields.map((pizza, pizzaIndex) => (
          <div key={pizzaIndex}>
            <AccordionItem key={pizza.id} value={`pizza-${pizzaIndex}`}>
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
          </div>
        ))}
      </Accordion>
    </div>
  );
};

export default AddPizza;
