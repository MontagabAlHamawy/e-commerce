import Navbar from "./componants/Navbar";
import Slider from "./componants/Slider";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact_us from "./pages/Contact_us";
import ProdactDetels from "./pages/ProdactDetels";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Slider />
        </>}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="contact-us" element={<Contact_us />}></Route>
        <Route path="proactdactlist/:prodactid" element={<ProdactDetels />}></Route>
      </Routes>
    </div>
  );
}

export default App;
