import { useEffect, useState } from "react";
import pizza1 from "../assets/images/pizza-dark-1.png";
import pizza2 from "../assets/images/pizza-dark-2.png";
import pizza3 from "../assets/images/pizza-dark-3.png";
import pizza4 from "../assets/images/pizza-dark-4.png";
import arrow from "../assets/images/up-arrow-black.png";
import RatingCard from "../components/RatingCard";

function Finish() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showRating, setShowRating] = useState(false);

  const pizzaImages = [
    {
      id: 1,
      url: pizza1,
    },
    {
      id: 2,
      url: pizza2,
    },
    {
      id: 3,
      url: pizza3,
    },
    {
      id: 4,
      url: pizza4,
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      if (currentImageIndex >= 3) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }, 1500);
  }, [currentImageIndex]);

  return (
    <div className="flex justify-center mt-12 px-6">
      <div className="max-w-xl text-center">
        <h1
          style={{ fontSize: "clamp(2.25rem, 3vw, 3rem)" }}
          className="font-bold pb-8"
        >
          Awesome, your order is on the way!
        </h1>
        <p className="text-2xl pb-2">You ordered:</p>
        <p className="tracking-wider">
          A pizza with chicago-style base and the following toppings: parma ham,
          pepperoni, extra cheese.
        </p>
        <div className="flex items-center justify-center my-10">
          {pizzaImages.map((pizza, index) => (
            <img
              key={index}
              src={pizza.url}
              alt=""
              loading="lazy"
              style={{
                display: index === currentImageIndex ? "block" : "none",
              }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <img src={arrow} width={100} alt="" />
          <p>
            If you got a minute, tell us{" "}
            <button
              onClick={() => {
                setShowRating(true);
              }}
              className="text-orange-500"
            >
              how we did!
            </button>
          </p>
          <img src={arrow} className="-scale-x-100" width={100} alt="" />
        </div>
      </div>
      {showRating && <RatingCard />}
    </div>
  );
}

export default Finish;
