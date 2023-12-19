import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Base from "./pages/Base";
import Toppings from "./pages/Toppings";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/base" element={<Base />} />
        <Route path="/toppings" element={<Toppings />} />
      </Routes>
    </Router>
  );
}

export default App;
