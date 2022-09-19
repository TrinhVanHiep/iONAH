import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import About from "../src/Page/About";
import HomePage from "../src/Page/HomePage";
import StyleGuide from "../src/Page/StyleGuide";
import Account from './Page/Account/Account';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StyleGuide />} />
        <Route path="home-page" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="account/*" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
