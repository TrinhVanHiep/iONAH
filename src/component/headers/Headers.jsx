import React, { useEffect, useState } from "react";
import logoUser from "../../image/logo_account.png";
import logo from "../../image/logo.png";
import heart from "../../image/heart.png";
import cart from "../../image/cart.png";
import down from "../../image/down.png";
import book from "../../image/book.png";
import search from "../../image/Search.png";
import Button from "../Button";
import "./styles.scss";

interface Props {
    heightsPage: Number;
    menu: any;
    openModal:(modalName:string)=>{}
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
                <Button className="text-ionah">Về Ionah</Button>
                <Button className="text-DT">Trở Thành Đối Tác Cùng Ionah</Button>
                <div className="form-user">
                  <div className="logo-user">
                    <img className="img-logo-user" src={logoUser}></img>
                  </div>
                  <div className="welcom">
                    <p className="text-welcom">Welcome</p>
                    <p className="signin-register" > <span onClick={()=>props.openModal("signIn")} >Sign in</span> / <span onClick={()=>props.openModal("signUp")} >Register</span></p>
                  </div>
                </div>
                <div className="language">
                  <Button className="button-eng">ENG{" "}</Button>
                  <span className="bt-g">|</span>
                  <Button className="button-vn">{" "}VN</Button>
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
                  <Button className="button-icon-down">
                    <img src={down} className="drop-down"></img>
                  </Button>
                </div>
                <div className="input-prices">
                  <input
                    className="input-search"
                    placeholder="Hôm nay bạn cần mua gì?"
                  ></input>
                  <Button className="button-icon-search">
                    <img src={search} className="icon-search"></img>
                  </Button>
                </div>
                <Button className="button-icon">
                  <img src={book} className="book"></img>
                </Button>
                <Button className="button-icon">
                  <img src={heart} className="heart"></img>
                </Button>
                <Button className="button-icon">
                  <img src={cart} className="cart"></img>
                </Button>
              </div>
            </div>
          </div>
          <div className="menu">
            <Button className="text-menu">Tivi</Button>
            <Button className="text-menu">Tủ Lạnh</Button>
            <Button className="text-menu">Máy Lạnh</Button>
            <Button className="text-menu">Máy Giặt</Button>
            <Button className="text-menu">Gia Dụng</Button>
            <Button className="text-menu">Bếp Từ</Button>
            <Button className="text-menu">Điện Thoại</Button>
            <Button className="text-menu">Lọc Nước</Button>
            <Button className="text-menu">Nồi Cơm</Button>
            <Button className="text-menu">Nồi Chiên</Button>
            <Button className="text-menu-dg">Đồ Gia Dụng Nhà Bếp</Button>
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
