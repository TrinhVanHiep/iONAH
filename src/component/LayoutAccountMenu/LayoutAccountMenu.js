import React from 'react'
import "./LayoutAccountMenu.scss"

function LayoutAccountMenu() {
  return (
    <ul className="layout-account-menu">
      <li className="menu-items">
        <p className="menu-items__name">My Account</p>
        <ul className="sub-menu">
          <li className="sub-menu__item active">
            <a>Thông tin tài khoản</a>
          </li>
          <li className="sub-menu__item">
            <a>Địa chỉ giao hàng</a>
          </li>
          <li className="sub-menu__item">
            <a>Thông tin thanh toán</a>
          </li>
          <li className="sub-menu__item">
            <a>Sản phẩm yêu thích</a>
          </li>
        </ul>
      </li>
      {/* <li>1
        <ul>
          <li>sub-1</li>
        </ul>
      </li>
      <li>1
        <ul>
          <li>sub-1</li>
        </ul>
      </li> */}
    </ul>
  )
}

export default LayoutAccountMenu
