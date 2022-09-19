
import logo from "./logo.svg";
import "./App.css";
import "./scss/style.scss";
import { Routes, Route, Link } from "react-router-dom";
import About from "../src/Page/About";
import HomePage from "../src/Page/HomePage";
import StyleGuide from "../src/Page/StyleGuide";
import OrderDetails from "./Page/OrderDetails";
import Account from './Page/Account/Account';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StyleGuide />} />
        <Route path="home-page" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="account/*" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
