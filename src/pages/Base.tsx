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

        <div className="my-5">
          {bases.map((base) => (
            <div
              onClick={() => handleAddBase(base.label)}
              key={base.id}
              className={`border-4 border-dashed w-max font-medium cursor-pointer ${
                selectedBase === base.label
                  ? "border-orange-500 text-orange-500"
                  : "border-transparent"
              }`}
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
