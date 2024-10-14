import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="app-wrapper">
        <Navbar />
        <div className="main-content">
          <div className="container-fluid">
            <Home />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
