import { Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import BookDetails from "./pages/BookDetails";
import Home from "./pages/Home";
import Wishlists from "./pages/Wishlists";

function App() {
  return (
    <>
      <div className="app-wrapper">
        <Navbar />

        <div className="main-content">
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wishlist" element={<Wishlists />} />
              <Route path="/book/:id" element={<BookDetails />} />
            </Routes>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
