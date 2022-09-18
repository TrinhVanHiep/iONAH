import logo from './logo.svg';
import './App.css';
import Header from './component/headers/Headers';
import ProductCards from "./component/prosuctCard/ProductCard";

function App() {
  return (
    <div className="App">
      <Header  />
      <ProductCards />
    </div>
  );
}

export default App;
