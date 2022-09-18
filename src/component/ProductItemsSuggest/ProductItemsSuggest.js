import "./ProductItemsSuggest.scss";
import itemImg from "../../asset/img/ProductItemSuggest/wash-machine.png";
import { formatMoney } from "../../common/commonFunctions";

const ProductItemsSuggest = ({
  itemId,
  img,
  itemName,
  itemCode,
  itemPrice,
  isSale,
  salePercent,
}) => {
  return (
    <div className="product-items-suggest">
      <div className="item-img">
        <img src={img ? img : itemImg} alt="item-img" />
      </div>
      <div className="items-detail">
        <div className="item-information">
          <p className="item-name">{itemName}</p>
          <p className="item-name">({itemCode})</p>
          <span className="item-price">{formatMoney(itemPrice)}</span>
          <br className="break-line" />
          {isSale ? (
            <>
              <span className="item-old-price">{formatMoney(itemPrice)}</span>
              <br className="break-line" />
              <span className="item-sale-percent">{salePercent}%</span>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProductItemsSuggest;
