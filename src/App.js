import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Tools/Header/Header";
import Footer from "./Tools/Footer/Footer";
import About from "./Tools/About/About";
import Contact from "./Tools/Contact/Contact";
import Home from "./Tools/Home/Home";
import Productdetails from "./Tools/Productdetails/Productdetails";
import Userlist from "./Tools/Userlist/Userlist";
import Edit from "./Tools/Edit/Edit";
import AddToCart from "./Tools/Addtocart/AddToCart";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/userlist" element={<Userlist />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="product-details/:id" element={<Productdetails />} />
          <Route path="/cart" element={<AddToCart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
