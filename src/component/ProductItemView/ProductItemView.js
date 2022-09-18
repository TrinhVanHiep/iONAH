import '../../App.css';
import ProductItemSelect from "../ProductItemSelect/ProductItemSelect";
import ProductItemsRecentlyView from "../ProductItemsRecentlyView/ProductItemsRecentlyView";
import ProductItemsSuggest from "../ProductItemsSuggest/ProductItemsSuggest";


function ProductItemView() {
  const fakeDataItemSelect = [
    {
      id: 1,
      name: "Smart Tivi Casper 43 inch 43FX6200",
      price: 20000000,
    },
    {
      id: 2,
      name: "Smart Tivi Casper 53 inch 53FX7200",
      price: 30000000,
    },
    {
      id: 3,
      name: "Smart Tivi Casper 73 inch 73FX6200",
      price: 40000000,
    },
  ];

  const fakeDataItemRecentView = [
    {
      id: 1,
      price: 20000000,
      rate: 2,
    },
    {
      id: 2,
      price: 30000000,
      rate: 3,
    },
    {
      id: 3,
      price: 40000000,
      rate: 4,
    },
  ];

  const addToSearch = () => {
    console.log("add item");
  };

  const addToCompare = () => {
    console.log("compare item");
  };

  return (
    <div className="product-item-view">
      <div>
        <p>Select Search Items</p>
        {fakeDataItemSelect.map((item) => (
          <div key={item.id}>
            <ProductItemSelect
              itemId={item.id}
              itemName={item.name}
              itemPrice={item.price}
              handleAddToSearch={addToSearch}
            />
          </div>
        ))}
      </div>
      <br/>
      <div style={{ marginTop: "30px" }}>
        <p>Product Items Recently Viewed</p>
        {fakeDataItemRecentView.map((item) => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            <ProductItemsRecentlyView
              itemId={item.id}
              price={item.price}
              currentRate={item.rate}
              totalRate={5}
              handleAddToCompare={addToCompare}
            />
          </div>
        ))}
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

        <ProductItemsSuggest 
          itemName={"Máy giặt cửa trước 12.5KG"} 
          itemCode={"WF-125I140BGB"}
          itemPrice={9560000}
          isSale={false}
        />
      </div>
    </div>
  );
}

export default ProductItemView;
