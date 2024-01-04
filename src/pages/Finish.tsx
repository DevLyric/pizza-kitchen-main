import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RatingCard from "../components/RatingCard";
import { useTheme } from "../context/ThemeContext";
import { pizzaImages } from "../constants/images";
import arrow from "../assets/images/up-arrow-black.png";

function Finish() {
  const location = useLocation();
  const themeCtx = useTheme();
  const selectedBase = location.state.selectedBase;
  const selectedToppings = location.state.selectedToppings;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showRating, setShowRating] = useState(false);

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
          A pizza with {selectedBase} base and the following toppings:{" "}
          {selectedToppings.join(", ")}.
        </p>
        <div className="flex items-center justify-center h-32 my-10">
          {pizzaImages.map((pizza, index) => (
            <img
              key={index}
              className={`${themeCtx?.darkMode === "dark" ? "invert" : ""}`}
              src={pizza.url}
              alt=""
              loading="lazy"
              style={{
                display: index === currentImageIndex ? "block" : "none",
              }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between tracking-wider">
          <img
            className={`${themeCtx?.darkMode === "dark" ? "invert" : ""}`}
            src={arrow}
            width={100}
            alt=""
          />
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
          <img
            className={`-scale-x-100 ${
              themeCtx?.darkMode === "dark" ? "invert" : ""
            }`}
            src={arrow}
            width={100}
            alt=""
          />
        </div>
      </div>
      {showRating && <RatingCard />}
    </div>
  );
}

export default Finish;
