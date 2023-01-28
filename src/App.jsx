import "./App.css";
import { NavBar, ItemListContainer } from "./components";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Gracias por visitarnos." />
    </div>
  );
};

export default App;
