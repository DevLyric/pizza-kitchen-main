import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Base from "./pages/Base";
import Toppings from "./pages/Toppings";
import Finish from "./pages/Finish";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ThemeProvider from "./context/ThemeContext";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/base" element={<Base />} />
          <Route path="/toppings" element={<Toppings />} />
          <Route path="/finish" element={<Finish />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
