import React from 'react';
import "./styles.css";
import star from "../../image/Star.png";
import heartCard from "../../image/heart_card.png"

interface Props {
    onPress: () => {};
    dataCard: any;
    containerCard: any;
    navigation: any;
    screenName: any;
  }

const ProductCards = (props: Props) => {
    const {dataCard} = props
    return (
        <div className='product-card' onClick={props.onPress}>
            <div className='product-top'>
                <button className='button-sale'>Trả góp 10%</button>
                <button className='button-sale'>Giảm 5.000.000đ</button>
            </div>
            <img className='product-image' src=""></img>
            <p className='product-name'>Casper RM-520VT </p>
            <div className='product-price-sale'>
                <div className='price-left'>
                    <p className='price-sale'>19,250,000 </p>
                    <p className='sale-percent'>-25%</p>
                </div>
                <div className='product-evaluate'>
                    <span className='number-evaluate'>5{" "}
                        <img className='star-evaluate' src={star}></img>
                    </span>
                    <p className='total-evaluate'>(45)</p>
                </div>
            </div>
            <div className='product-price'>
                <p className='price'>18,490,000</p>
                <button className='product-like'>
                    <img className='icon-like' src={heartCard}></img>
                </button>
            </div>
            <div className='product-des'>
                <button className='button-des'>55 inches</button>
                <button className='button-des'>4k</button>
                <button className='button-des'>2 Năm bảo hành</button>
            </div>
            <div className='bank'>
                <button className='button-bank'>
                    <img className='icon-bank' src=''></img>
                </button>
                <button className='button-bank'>
                    <img className='icon-bank' src=''></img>
                </button>
                <button className='button-bank'>
                    <img className='icon-bank' src=''></img>
                </button>
                <button className='button-bank'>
                    <img className='icon-bank' src=''></img>
                </button>
            </div>
            <p className='text-des'>Ưu đãi đến 1.1 triệu khi mở thẻ TPBANK EVO</p>
            <div className='bank-pay'>
                <button className='button-pay'>
                    <img className='icon-pay' src=''></img>
                </button>
                <button className='button-pay'>
                    <img className='icon-pay' src=''></img>
                </button>
                <button className='button-pay'>
                    <img className='icon-pay' src=''></img>
                </button>
                <button className='button-pay'>
                    <img className='icon-pay' src=''></img>
                </button>
            </div>
            <div className='product-bottom'>
                <img className='icon-tich' src=''></img>
                <p className='text-ss'>So sánh</p>
                <button className='button-mn'>Mua ngay</button>
            </div>
        </div>
    )
}

export default ProductCards