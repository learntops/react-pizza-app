import { Controller, useFormContext } from "react-hook-form";
import Pizza from "../assets/pizza/pizza.jpg";
import { type FormSchema } from "@/schema/formSchema";
import Anchovy from "../assets/toppings/anchovy.svg";
import Bacon from "../assets/toppings/bacon.svg";
import Basil from "../assets/toppings/basil.svg";
import Chili from "../assets/toppings/chili.svg";
import Mozarella from "../assets/toppings/mozzarella.svg";
import Mushroom from "../assets/toppings/mushroom.svg";
import Olives from "../assets/toppings/olive.svg";
import Onion from "../assets/toppings/onion.svg";
import Pepper from "../assets/toppings/pepper.svg";
import Pepperoni from "../assets/toppings/pepperoni.svg";
import Sweetcorn from "../assets/toppings/sweetcorn.svg";
import Tomatoes from "../assets/toppings/tomato.svg";
const pizzaData = [
  {
    name: "Large",
    size: 13,
    image: Pizza,
  },
  {
    name: "Medium",
    size: 11,
    image: Pizza,
  },
  {
    name: "Small",
    size: 9,
    image: Pizza,
  },
];

const toppingsData = [
  {
    topping: "Anchovy",
    image: Anchovy,
  },
  {
    topping: "Bacon",
    image: Bacon,
  },
  {
    topping: "Basil",
    image: Basil,
  },
  {
    topping: "Chili",
    image: Chili,
  },
  {
    topping: "Mozarella",
    image: Mozarella,
  },
  {
    topping: "Mushroom",
    image: Mushroom,
  },
  {
    topping: "Olive",
    image: Olives,
  },
  {
    topping: "Onion",
    image: Onion,
  },
  {
    topping: "Pepper",
    image: Pepper,
  },
  {
    topping: "Pepperoni",
    image: Pepperoni,
  },
  {
    topping: "Sweetcorn",
    image: Sweetcorn,
  },
  {
    topping: "Tomato",
    image: Tomatoes,
  },
];

const sizeMap: Record<string, string> = {
  Small: "w-14",
  Medium: "w-20",
  Large: "w-30",
};

type Pizza = {
  name: string;
  size: number;
};

type SelectSizeProps = {
  pizzaIndex: number;
};

const SelectSize = ({ pizzaIndex }: SelectSizeProps) => {
  const { control } = useFormContext<FormSchema>();

  return (
    <div className="w-full h-auto">
      <h5 className="font-bold text-gray-700">Select the size *</h5>

      <Controller
        name={`pizzas.${pizzaIndex}.size`}
        control={control}
        render={({ field }) => (
          <div className="flex items-center justify-between gap-2">
            {pizzaData.map((pizza, index) => (
              <div
                key={index}
                className={`flex items-center w-full cursor-pointer border p-2 rounded-md ${
                  field.value === pizza.name ? "text-blue-400" : "text-gray-500"
                }`}
                onClick={() => field.onChange(pizza.name)}
              >
                <div className={sizeMap[pizza.name]}>
                  <img src={pizza.image} alt={pizza.name} className="w-full" />
                </div>
                <h4
                  className={`font-semibold ${
                    field.value === pizza.name
                      ? "text-blue-300"
                      : "text-gray-500"
                  }`}
                >
                  {pizza.name}
                </h4>
                <p
                  className={`font-semibold ${
                    field.value === pizza.name
                      ? "text-blue-300"
                      : "text-gray-500"
                  }`}
                >
                  ({pizza.size}")
                </p>
              </div>
            ))}
          </div>
        )}
      />

      <h4 className="mt-4 font-bold text-gray-700">Pick your toppings *</h4>

      <Controller
        name={`pizzas.${pizzaIndex}.toppings`}
        control={control}
        render={({ field }) => {
          const handleToggle = (topping: string) => {
            const exists = field.value?.includes(topping);
            if (exists) {
              field.onChange(field.value.filter((top) => top !== topping));
            } else {
              field.onChange([...(field.value || []), topping]);
            }
          };

          return (
            <div className="grid grid-cols-4 gap-2">
              {toppingsData.map((toppings, index) => {
                const selected = field.value?.includes(toppings.topping);
                return (
                  <div
                    key={index}
                    className={`flex cursor-pointer `}
                    onClick={() => handleToggle(toppings.topping)}
                  >
                    <div className={`p-1 bg-gray-100 `}>
                      <img src={toppings.image} className="w-10 h-10" />
                    </div>
                    <div
                      className={`w-full flex items-center justify-center ${
                        selected
                          ? "bg-blue-500 text-white"
                          : "bg-gray-50 font-medium text-gray-700"
                      }`}
                    >
                      <p className="text-sm">{toppings.topping}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        }}
      />
    </div>
  );
};

export default SelectSize;
