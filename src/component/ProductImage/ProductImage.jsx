import React from 'react';
import "./styles.scss";
import ProductImage from "../../asset/img/image-procuts.png"

interface Props {
    dataImageProduct: any;
  }


const ProductImages = (props: Props) => {
    const {dataImageProduct} = props
    return (
        <div className='product-container'>
            <div className='product-images'>
                <img className='image-product' src={ProductImage}></img>
            </div>
            <p className='name-product'>Máy sấy tóc</p>
        </div>
    )
}

export default ProductImages