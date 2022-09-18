import React, { useState } from 'react'
import Close from "../Product_Item_Cart/Images/Svg/Clear_X"
import Dropdown from "../Dropdown/Dropdown"
import Button from "../Button/index"
import "./styles.scss"
export default function Index() {
    const [value, setShow] = useState()
    return (
        <div className='wrapper__popup__chosen__delivery__time'>
            <div className='Popup__background'></div>
            <div className='wrapper__popup__chosen__delivery__time__content'>
                <div>
                    <h1>Chọn thời gian nhận hàng</h1>
                    <i><Close /></i>
                </div>
                <div className='wrapper__popup__chosen__delivery__time__content__dropdown'>
                    <div>
                        <span>Địa chỉ</span>
                        <div>
                            <Dropdown label="Giờ" value={value} height="32px" width="459px" />
                            <div className='wrap__date__month'>
                                <Dropdown label="Ngày" value={value} height="32px" width="222px" />
                                <Dropdown label="Tháng" value={value} height="32px" width="221px" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='wrapper__popup__chosen__delivery__time__content__button'>
                    <Button children="Trở Lại" type='secondary' />
                    <Button children="Lưu thay đổi" type='primary' />
                </div>
            </div>
        </div>
    )
}
