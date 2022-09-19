import React from 'react'
import "./Account.scss"
import Layout from '../../component/Layout';
import LayoutAccountMenu from '../../component/LayoutAccountMenu/LayoutAccountMenu';
import { menuList } from "./helper"
import { Navigate, Route, Routes } from 'react-router-dom';

function Account() {
  return (
    <Layout>
      <div className="account">
        <div className="account-menu">
          {menuList.map((item) => (
            <LayoutAccountMenu item={item} />
          ))}
        </div>
        <div className="account-content">
          <Routes>
            {menuList.map((element, index) => (
              <>
                {element.listSubItem.map((item, index) => (
                  <Route
                    path={`${element.url}/${item.url}`}
                    element={item.component}
                    key={String(index)}
                  />
                ))}
              </>
            ))}
          </Routes>
        </div>
      </div>
    </Layout>
  )
}

export default Account;
