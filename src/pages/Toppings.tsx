import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toppings } from "../constants/toppings";

function Toppings() {
  const location = useLocation();
  const selectedBase = location.state.selectedBase;
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);

  function handleAddToppings(topping: string) {
    if (selectedToppings.includes(topping)) {
      setSelectedToppings(selectedToppings.filter((item) => item !== topping));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  }

  return (
    <div className="flex justify-center mt-28 px-6">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-semibold">Choose your Toppings:</h1>

        <div className="flex flex-col gap-2 my-5">
          {toppings.map((topping) => (
            <div
              key={topping.id}
              tabIndex={0}
              onClick={() => handleAddToppings(topping.label)}
              className={`w-max text-lg px-1 font-medium cursor-pointer focus:border-[3px] focus:border-orange-500 focus:border-dashed ${
                selectedToppings.includes(topping.label)
                  ? "text-orange-500"
                  : ""
              }`}
            >
              {topping.label}
            </div>
          ))}
        </div>
        {selectedToppings.length >= 3 && (
          <Link to="/finish" state={{ selectedBase, selectedToppings }}>
            <button
              style={{ fontSize: "clamp(.75rem, 2.5vw, 1rem)" }}
              className="w-full py-5 rounded-full font-semibold text-white bg-orange-500
          hover:scale-110 transition-all"
            >
              FINISH YOUR ORDER
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Toppings;
