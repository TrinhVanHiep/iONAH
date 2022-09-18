import "./SelectSaleType.scss"
import itemImg from "../../asset/img/ProductItemSale/momo.png";
import { IconInformation } from "../../asset/Icons/Icon"
import TagType from "../TagType/TagType";
import Button from "../Button";

const SelectSaleType = ({ img }) => {
  return (
    <div className="select-sale-type">
      <div className="item-img">
        <img src={img ? img : itemImg} alt="item-img" />
      </div>
      <div className="items-detail">
        <div className="item-information">
          <div className="item-header-sale">
            <TagType />
            <i>
              <IconInformation />
            </i>

          </div>
          <p className="item-sale-percent">Giam 20%</p>
          <p className="item-order">Cho đơn hàng từ 20.000.000 vnd</p>
          <div className="item-date-exprie">
            <span className="exprie-date">HSD: đến hết 00:00 ngày 20/09/2022</span>
            {/* <Button type="primary" className="" onClick={() => { }}>Select</Button> */}
          </div>
          <br className="break-line" />
        </div>
      </div>
    </div>
  )
}

export default SelectSaleType
