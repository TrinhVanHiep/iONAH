import React, { useEffect, useState } from 'react';
import "./styles.scss";
import star from "../../image/Star.png";
import heartCard from "../../image/heart_card.png"
import bank from "../../image/bank.png";
import compare from "../../image/Compare.png";
import Button from '../Button';
import layers from "../../asset/img/layers.png"
import iconStock from "../../asset/img/radix-icons_value-none.png";

interface Props {
    onPress: () => {};
    dataCard: any;
  }

const ProductCards = (props: Props) => {
    const [windowSize, setWindowSize] = useState(window.innerHeight);
    useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize(window.innerWidth);
        };
    
        window.addEventListener("resize", handleWindowResize);
    
        return () => {
          window.removeEventListener("resize", handleWindowResize);
        };
      }, []);
    const {dataCard} = props
    return (
        <div className='product-card' onClick={props.onPress}>
            <div className='product-top'>
                <Button className='button-sale'>Trả góp 10%</Button>
                <Button className='button-sale'>Giảm 5.000.000đ</Button>
            </div>
            {dataCard?.image ? (
                <div className='product-not-image'></div>
            ) : dataCard?.numberProduct ? (
                <img className='product-image' src=""></img>
            ) : (
                <div className='product-stock'>
                    <img className='product-image' src=""></img>
                    <div className='stock-pop'>
                        <img className='image-stock' src={iconStock}></img>
                        <p className='name-stock'>Hết hàng</p>
                    </div>
                </div>
            )}
            <p className='product-name'>Casper RM-520VT </p>
            <div className='product-price-sale'>
                <div className='price-left'>
                    <p className='price-sale'>19,250,000 </p>
                    <p className='sale-percent'>-25%</p>
                </div>
                <div className='product-evaluate'>
                    <span className='number-evaluate'>5
                    </span>
                    <img className='star-evaluate' src={star}></img>
                    <p className='total-evaluate'>(45)</p>
                </div>
            </div>
            <div className='product-price'>
                <p className='price'>18,490,000</p>
                <Button className='product-like'>
                    <img className='icon-like' src={heartCard}></img>
                </Button>
            </div>
            <div className='product-des'>
                <Button className='button-des'>55 inches</Button>
                <Button className='button-des'>4k</Button>
                <Button className='button-des'>2 Năm bảo hành</Button>
            </div>
            <div className='bank'>
                <Button className='button-bank'>
                    <img className='icon-bank' src={bank}></img>
                </Button>
                <Button className='button-bank'>
                    <img className='icon-bank' src={bank}></img>
                </Button>
                <Button className='button-bank'>
                    <img className='icon-bank' src={bank}></img>
                </Button>
                <Button className='button-bank'>
                    <img className='icon-bank' src={bank}></img>
                </Button>
            </div>
            <p className='text-des'>Ưu đãi đến 1.1 triệu khi mở thẻ TPBANK EVO</p>
            <div className='product-sl'>
                <div style={windowSize > 600 ? {width: (24/50)*300 } : {width: (24/50)*180 }} className='sl-db'>
                    <img className='image-sl' src={layers}></img>
                    <p className='text-sl'>Đã bán 24/50 </p>
                </div>
            </div>
            <div className='bank-pay'>
                <Button className='button-pay'>
                    <img className='icon-pay' src={bank}></img>
                </Button>
                <Button className='button-pay'>
                    <img className='icon-pay' src={bank}></img>
                </Button>
                <Button className='button-pay'>
                    <img className='icon-pay' src={bank}></img>
                </Button>
                
            </div>
            <div className='product-bottom'>
                <img className='icon-tich' src={compare}></img>
                <p className='text-ss'>So sánh</p>
                <Button className='button-mn'>Mua ngay</Button>
            </div>
        </div>
    )
}

export default ProductCards