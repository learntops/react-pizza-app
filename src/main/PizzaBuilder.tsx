import Hero from "../components/Hero";
import PizzaForm from "./PizzaForm";

const PizzaBuilder = () => {
  return (
    <div className="flex w-full h-screen">
      <Hero />
      <PizzaForm />
    </div>
  );
};

export default PizzaBuilder;
