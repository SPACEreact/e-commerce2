
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from "./Components/navbar";
import Cart from "./Pages/Cart/cart";
import Shop from "./Pages/Shop/shop";
import {ShopContextProvider} from "./context/shop-context"

function App() {
  return (

    <div>

      <ShopContextProvider>

      <Router>
        <Navbar/>
        
        
        <Routes>
          <Route path="/" element={<Shop/>}   />
          <Route path="/cart"  element={<Cart/>}/>
          <Route path="/shop" element={<Shop/>} />
        </Routes>
      </Router>

      </ShopContextProvider>

    </div>
  );
}

export default App;
   