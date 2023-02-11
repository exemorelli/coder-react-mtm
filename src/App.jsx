import "./App.css";
import {
  NavBar,
  ItemListContainer,
  ItemDetailContainer,
  ItemCategory,
  Cart,
  Home,
} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<ItemListContainer />} />
          <Route
            exact
            path="/products/:productsID"
            element={<ItemDetailContainer />}
          />
          <Route
            exact
            path="/category/:categoryName"
            element={<ItemCategory />}
          />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
