import logo from './logo.svg';
import './App.css';
import Header from './component/headers/Headers';
import ProductCards from "./component/prosuctCard/ProductCard";
import Item_Slide from "./component/Item_Slide_Shop_By_Brand/Item_Slide"
import Big_Banner from "./component/Banner_Category_Products/Banner_Category_Products"
import Popup_Notifi from "./component/Popup_notification/Popup_notifi"
import Banner from './component/Banner';
import ProductItemView from "./component/ProductItemView/ProductItemView"
function App() {
  return (
    <div className="App">
       {/* <div className='session1'>
        <Header />
        <Banner/>
       </div>
    
      <ProductCards />
      <Item_Slide />
      <Big_Banner /> */}
      {/* <Popup_Notifi/> */}
      <ProductItemView/>
    </div>
  );
}

export default App;
