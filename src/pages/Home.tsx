import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home flex justify-center mt-28 px-6 bg-ingredients-light">
      <div className="max-w-xl">
        <h1
          style={{
            fontSize: "clamp(1.35rem, 8vw, 2.75rem)",
          }}
          className="text-center font-bold py-8 px-6"
        >
          Welcome to Pizza Kitchen
        </h1>
        <Link to="/base">
          <button
            style={{ fontSize: "clamp( .75rem, 2.5vw, 1rem)" }}
            className="w-full py-5 rounded-full font-semibold text-white bg-orange-500
          hover:scale-110 transition-all"
          >
            CREATE YOUR PIZZA
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
