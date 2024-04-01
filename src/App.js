import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Pagenotfound from "./pages/Pagenotfound";
import Header from "./components/Layout/Header";
function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} ></Route>
          <Route path="*" element={<Pagenotfound />} />
          {/* <Route path="/trialmenu" element={<TrialMenu/>}></Route> */}
          <Route path="/login" element={<Login/>}></Route>
           <Route path="/signup" element={<Signup/>}></Route>
           <Route path="/Cart" element={<Cart/>}></Route>
        </Routes>
        
        
      
      </BrowserRouter>
    </div>
  );
}

export default App;
