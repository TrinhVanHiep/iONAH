import "./SelectSaleType.css"
import itemImg from "../../assets/img/ProductItemSuggest/wash-machine.png";

const SelectSaleType = ({img}) => {
  return (
    <div className="select-sale-type">
      <div className="item-img">
        <img src={img ? img : itemImg} alt="item-img" />
      </div>
      <div className="items-detail">
        <div className="item-information">
          <p className="item-name">abc</p>
          <p className="item-name">abc</p>
          <span className="item-price">abc</span>
          <br className="break-line" />
          {/* {isSale ? (
            <>
              <span className="item-old-price">abc</span>
              <br className="break-line" />
              <span className="item-sale-percent">abc</span>
            </>
          ) : null} */}
        </div>
      </div>
    </div>
  )
}

export default SelectSaleType
