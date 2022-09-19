import React from 'react'
import "./Account.scss"
import Layout from '../../component/Layout';
import LayoutAccountMenu from '../../component/LayoutAccountMenu/LayoutAccountMenu';

function Account() {
  return (
    <Layout>
      <div className="account">
        <div className="account-menu">
          <LayoutAccountMenu />
        </div>
        <div className="account-content">account-content</div>
      </div>
    </Layout>
  )
}

export default Account;
