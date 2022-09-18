import '../../App.css';
import ProductItemSelect from "../ProductItemSelect/ProductItemSelect";
import ProductItemsRecentlyView from "../ProductItemsRecentlyView/ProductItemsRecentlyView";
import ProductItemsSuggest from "../ProductItemsSuggest/ProductItemsSuggest";
import SelectSaleType from "../SelectSaleType/SelectSaleType"


function ProductItemView() {

  const addToSearch = () => {
    console.log("add item");
  };

  const addToCompare = () => {
    console.log("compare item");
  };

  return (
    <div className="product-item-view">
      {/* <div>
        <p>Select Search Items</p>
        <ProductItemSelect
          itemId={1}
          itemName={"Smart Tivi Casper 43 inch 43FX6200"}
          itemPrice={20000000}
          handleAddToSearch={addToSearch}
        />
      </div>
      <br/>
      <div style={{ marginTop: "30px" }}>
        <p>Product Items Recently Viewed</p>
        <ProductItemsRecentlyView
          itemId={1}
          price={30000000}
          currentRate={4}
          totalRate={5}
          handleAddToCompare={addToCompare}
        />
      </div>
      <br/>
      <div>
        <p>Suggest Item</p>
        <ProductItemsSuggest 
          itemName={"Máy giặt cửa trước 12.5KG"} 
          itemCode={"WF-125I140BGB"}
          itemPrice={9560000}
          isSale={true}
          salePercent={-8}
        />
      </div> */}

      <div style={{ marginTop: "30px" }}>
        <SelectSaleType />
      </div>
    </div>
  );
}

export default ProductItemView;
