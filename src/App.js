import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HelpSection from "./components/helpSection/HelpSection";
import Main from "./components/main/Main";
import ArmeniaMap from "./components/map/ArmeniaMap";

function App() {
  return (
    <div>
      <Header />
      <Main />
      <HelpSection />
      <ArmeniaMap />
      <Footer />
    </div>
  );
}

export default App;
