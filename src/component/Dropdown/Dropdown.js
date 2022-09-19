import React, { useState } from 'react'
import "./styles.scss"
import Polygon from "./Images/Polygon 1"
export default function Dropdown({ label, data, setValueChosen, height, width, value }) {
    const [show, setShow] = useState(false)
    console.log(value);
    const HandleChange = (el) => {
        setValueChosen(el.value)
        setShow(false)
    }
    return (
        <div className='wrapper__dropdown'>
            {/* {
                label !== null || label !== undefined && <label >Choose </label>
            } */}

            <div className='dropdown__inner'>
                <div className='dropdown__inner__wrap' style={{ height: height, width: width }}>
                    <div onClick={(e) => setShow(true)}>
                        {value !== undefined ? value : label}
                        <i><Polygon /></i>
                    </div>
                    {show === true && <div className='list__data__dropdown'>
                        {
                            data.map((el, index) =>
                                <p key={index} onClick={(e) => HandleChange(el)}>{el.value}</p>
                            )
                        }
                    </div>}
                </div>
            </div>
        </div>
    )
}
