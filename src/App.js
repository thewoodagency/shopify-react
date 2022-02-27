import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Link } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import NavMenu from "./components/NavMenu";

function App() {
  return (
    <div className="App">
      <Router>
        <h1><Link to="/">Store</Link></h1>
        <NavBar/>
        <NavMenu />
        <Cart/>
        <Switch>
          <Route path={"/"} exact>
            <Home/>
          </Route>
          <Route path={"/products/:handle"}>
            <ProductPage/>
          </Route>
        </Switch>
        <p>Footer</p>
      </Router>
    </div>
  );
}

export default App;
