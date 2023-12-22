import { useState } from "react";
import { useNavigate } from "react-router-dom";
import star from "../assets/images/icon-star.svg";
import ty from "../assets/images/illustration-thank-you.svg";

function RatingCard() {
  const navigate = useNavigate();
  const [selectedRating, setSelectedRating] = useState<number | undefined>(
    undefined
  );

  const [isSubmitted, setISsubmitted] = useState(false);

  return (
    <div className="absolute top-0 w-full h-screen flex items-center justify-center bg-[#303030]/90 px-6">
      {isSubmitted ? (
        <div className="w-96 h-96 p-6 text-center bg-white rounded-3xl">
          <div className="flex justify-center my-3">
            <img src={ty} alt="" />
          </div>

          <div className="text-orange-500 font-medium mx-10 p-1 rounded-full bg-[#ebedf0] my-4">
            You selected 3 out of 5
          </div>

          <h1 className="text-center text-2xl font-medium my-3">Thank You</h1>

          <p className="font-medium text-sm sm:text-base text-[#969fad]">
            We appreciate you taking the time to give a rating. If you have a
            question or feedback, don't hesitate to get in touch!
          </p>

          <button
            onClick={() => {
              navigate("/");
            }}
            className="text-orange-500 font-medium my-3"
          >
            Back to Home page
          </button>
        </div>
      ) : (
        <div className="w-96 p-6 bg-white rounded-3xl">
          <div className="h-12 w-12 flex items-center justify-center rounded-full bg-[#e5e7ea]">
            <img src={star} alt="" />
          </div>
          <h1 className="text-center text-2xl font-medium my-4">
            How did we do?
          </h1>
          <p className="text-center text-[#969fad] font-medium">
            Please let us know how we did with your order. All feedback is
            appreciated to help us improve our offering!
          </p>

          <div className="flex items-center justify-between my-4">
            {[1, 2, 3, 4, 5].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setSelectedRating(item);
                }}
                className="text-[#959eac] bg-[#e5e7ea] h-12 w-12 font-semibold rounded-full hover:text-white hover:bg-[#959eac] focus:bg-orange-500 focus:text-white"
              >
                {item}
              </button>
            ))}
          </div>
          {selectedRating && (
            <button
              onClick={() => {
                setISsubmitted(true);
              }}
              className="w-full py-3 my-3 font-semibold text-white bg-orange-500 tracking-wider rounded-full"
            >
              SUBMIT
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default RatingCard;
