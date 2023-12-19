import { useState } from "react";
import { Link } from "react-router-dom";

type Base = {
  id: number;
  label: string;
};

function Base() {
  const [selectedBase, setSelectedBase] = useState<string>("");

  const bases: Base[] = [
    {
      id: 1,
      label: "Classic",
    },
    {
      id: 2,
      label: "Thin",
    },
    {
      id: 3,
      label: "Stuffed",
    },
    {
      id: 4,
      label: "Chicago-style",
    },
  ];

  function handleAddBase(base: string) {
    setSelectedBase(base);
  }
  console.log(selectedBase);

  return (
    <div className="flex justify-center mt-28 px-6">
      <div className="w-full max-w-xl">
        <h1 className="text-3xl font-semibold">Choose your pizza base:</h1>

        <div className="flex flex-col gap-2 my-5">
          {bases.map((base) => (
            <div
              key={base.id}
              tabIndex={0}
              onClick={() => handleAddBase(base.label)}
              className={`w-max text-lg px-1 font-medium cursor-pointer focus:text-orange-500 focus:border-[3px] focus:border-orange-500 focus:border-dashed`}
            >
              {base.label}
            </div>
          ))}
        </div>
        {selectedBase && (
          <Link to="/toppings">
            <button
              style={{ fontSize: "clamp(.75rem, 2.5vw, 1rem)" }}
              className="w-full py-5 rounded-full font-semibold text-white bg-orange-500
          hover:scale-110 transition-all"
            >
              NEXT: TOPPINGS
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Base;
