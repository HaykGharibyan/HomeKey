import "./App.css";
import ArqVacharq from "./components/ArqVacharq";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePageComponents from "./components/HomePageComponents";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePageComponents />} />
          <Route path="arqVacharq" element={<ArqVacharq />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
