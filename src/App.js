import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Store</h1>
        <Route path={"/"} exact>
          <Home />
        </Route>
        <Route path={"/product"} >
          <ProductPage />
        </Route>
        <Route path={"/about"} >
          <ProductPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
