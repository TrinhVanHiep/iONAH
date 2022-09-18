import logo from './logo.svg';
import './App.css';
import Header from './component/headers/Headers';
import ProductCards from "./component/prosuctCard/ProductCard";
import Item_Slide from "./component/Item_Slide_Shop_By_Brand/Item_Slide"
import Big_Banner from "./component/Banner_Category_Products/Banner_Category_Products"
import Popup_Notifi from "./component/Popup_notification/Popup_notifi"
function App() {
  return (
    <div className="App">
      <Header />
      <ProductCards />
      <Item_Slide />
      <Big_Banner />
      {/* <Popup_Notifi/> */}
    </div>
  );
}

export default App;
