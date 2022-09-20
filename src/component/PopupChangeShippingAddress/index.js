import React, { useState } from "react";
import "./PopupChangeShippingAddress.scss";
import Edit from "../../image/icons_edit.svg";
import Button from "../Button";
function PopupChangeShippingAddress() {
  const data = [
    {
      id:1,
      stt: "Địa chỉ 1",
      name: "Tên người nhận",
      address:
        " Rectory Cottage, Farleigh Court Road, Warlingham, CR6 9PX",
      phone: "(+84) 913 502 413",
    },
    {
      id:2,
      stt: "Địa chỉ 2",
      name: "Tên người nhận",
      address:
        " Rectory Cottage, Farleigh Court Road, Warlingham, CR6 9PX",
      phone: "(+84) 913 502 413",
    },
  ];

  const [dataChoose, setDataChoose] = useState(data && JSON.stringify(data[0]));

  const handleChange = (e) => {
    setDataChoose(e.target.value)
  }

  console.log('====================================');
  console.log(dataChoose);
  console.log('====================================');

  return (
    <div className="shipping-address">
    {data.map((el,index) => (
      <label class="address-radio">
      <input
        key = {index}
        type="radio"
        name="site_name"
        value={JSON.stringify(el)}
        checked={dataChoose === JSON.stringify(el)}
        onChange={(e) => handleChange(e)}
        />
      <div className="address-radio_content">
        <div className="address-radio_content__name">
        <span className="text-title">{el.stt}</span>
        <div className="btn">
        <button>Địa chỉ mặc định</button>
        <button>Địa chỉ nhà riêng/ chung cư</button>
        </div>
        </div>
       
        <span className="text-label">{el.name}</span>
        <span className="text-content">Địa chỉ:  {el.address}</span>
        <span className="text-content">Số điện thoại: {el.phone}</span>
      </div>
      <img src={Edit} alt="icon-edit" />
    </label>

    ))}
     
    </div>
  );
}

export default PopupChangeShippingAddress;
