import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Base from "./pages/Base";
import Toppings from "./pages/Toppings";
import Finish from "./pages/Finish";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/base" element={<Base />} />
        <Route path="/toppings" element={<Toppings />} />
        <Route path="/finish" element={<Finish />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
