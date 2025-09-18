import Pizza from "../assets/pizza/pizza.jpg";

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

const SelectSize = () => {
  return (
    <div>
      <h5>Select the size *</h5>

      <div>
        {pizzaData.map((pizza, index) => (
          <div key={index}></div>
        ))}
      </div>
    </div>
  );
};

export default SelectSize;
