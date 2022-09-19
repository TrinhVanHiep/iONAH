import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./LayoutAccountMenu.scss"

function LayoutAccountMenu({ item }) {

  const [activeLink, setActiveLink] = useState("")

  const handleGetActiveLink = (link) => {

  }

  return (
    <ul className="layout-account-menu">
      <li className="menu-items">
        <p className="menu-items__name">{item.name}</p>
        <ul className="sub-menu">
           
          {item?.listSubItem && item?.listSubItem?.map((subMenu) => (
            <li className="sub-menu__item">
              <NavLink
                to={`/account/${item.url}/${subMenu.url}`}
                key={item.name}>
                {subMenu.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  )
}

export default LayoutAccountMenu
