import React, { useEffect, useState } from "react";
import logoUser from "../../image/logo_account.png";
import logo from "../../image/logo.png";
import heart from "../../image/heart.png";
import cart from "../../image/cart.png";
import down from "../../image/down.png";
import book from "../../image/book.png";
import search from "../../image/Search.png";
import "./styles.scss";

interface Props {
    heightsPage: Number;
    menu: any;
}

const Header = (props: Props) => {
  const [windowSize, setWindowSize] = useState(window.innerHeight);
  const [heights, setHieghts] = useState(0);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  useEffect(() => {
    setHieghts(props.heightsPage);
  },[props.heightsPage])
  return (
    <div className="header" onScroll={props.onScrollTop}>
      {windowSize > 800 ? (
        <div className={heights > 57 ? "header-pos" : ""}>
          <div className="header-form">
            {heights < 57 ? (
              <div className="header-top">
                <span className="text-ionah">Về Ionah</span>
                <span className="text-DT">Trở Thành Đối Tác Cùng Ionah</span>
                <div className="form-user">
                  <div className="logo-user">
                    <img className="img-logo-user" src={logoUser}></img>
                  </div>
                  <div className="welcom">
                    <p className="text-welcom">Welcome</p>
                    <p className="signin-register">Sign in/ Register</p>
                  </div>
                </div>
                <div className="language">
                  <button className="button-eng">ENG </button>
                  <span className="bt-g">|</span>
                  <button className="button-vn"> VN</button>
                </div>
              </div>
            ) : (
              <></>
            )}
            <div className="header-bottom">
              <div className="logo">
                <img className="logos" src={logo}></img>
              </div>
              <div className="header-bottom-right">
                <div className="input-price">
                  <input
                    className="input-search-price"
                    placeholder="Xem giá, tồn kho tại:  Hà Nội"
                  ></input>
                  <img src={down} className="drop-down"></img>
                </div>
                <div className="input-prices">
                  <input
                    className="input-search"
                    placeholder="Hôm nay bạn cần mua gì?"
                  ></input>
                  <img src={search} className="icon-search"></img>
                </div>
                <img src={book} className="book"></img>
                <img src={heart} className="heart"></img>
                <img src={cart} className="cart"></img>
              </div>
            </div>
          </div>
          <div className="menu">
            <p className="text-menu">Tivi</p>
            <p className="text-menu">Tủ Lạnh</p>
            <p className="text-menu">Máy Lạnh</p>
            <p className="text-menu">Máy Giặt</p>
            <p className="text-menu">Gia Dụng</p>
            <p className="text-menu">Bếp Từ</p>
            <p className="text-menu">Điện Thoại</p>
            <p className="text-menu">Lọc Nước</p>
            <p className="text-menu">Nồi Cơm</p>
            <p className="text-menu">Nồi Chiên</p>
            <p className="text-menu-dg">Đồ Gia Dụng Nhà Bếp</p>
          </div>
        </div>
      ) : (
        <div className={heights > 57 ? "header-pos-moblie" : "header-mobile"}>
          <div className="logo">
            <img className="logos" src={logo}></img>
          </div>
          <div className="input-prices">
            <img src={search} className="icon-search"></img>
            <input
              className="input-search"
              placeholder="Hôm nay bạn cần mua gì?"
            ></input>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
