import { useEffect } from "react";
import { IconCheckedTerm } from "../../../asset/Icons/Icon";
import Button from "../../Button";
import Input from "../../Input";
import IconFB from './../../../asset/img/iconFB.png'
import IconGG from './../../../asset/img/iconGG.png'
import IconZalo from './../../../asset/img/iconFB.png'
import "./styles.scss";
let modal = "";

export default function SignInModal({isShowSignUpModal, handleClose}) {
  useEffect(() => {
    modal = document.querySelector("#_signin-modal");
  }, []);

  // Close
  const closeModal = () => {
    handleClose()
  };

  // Close If Outside Click
  const outsideClick = (e) => {
    if (e.target == modal) {
        handleClose()
    }
  };

  useEffect(()=>{
    if(isShowSignUpModal && modal!==''){
    modal.style.display = "block";
    }else if(modal!==''){
        modal.style.display = "none";
    }  
},[isShowSignUpModal])
  return (
    <div className="_modal-signin" onClick={outsideClick}>
      <div id="_signin-modal" className="modal">
        <div className="modal-content">
            <span className="btn-close-signin" onClick={closeModal}>
              &times;
            </span>
          <div className="modal-header">
            <p>Đăng nhập/ Đăng ký</p>
            <span>đăng nhập là đăng kí</span>
          </div>
          <div className="modal-body">
           <Input placeholder="Số điện thoại *"/>
           <Button className="btn-get-otp" type="secondary">Nhận mã OTP</Button>
           <Input placeholder="Nhập mã OTP" className="input-type-otp"/>
           <Button className="btn-login">Đăng nhập</Button>
           <div className="term-info">
            <IconCheckedTerm/>
            <span className="term">Tôi đồng ý với Điều khoản dịch vụ và chính sách bảo mật của Ionah</span>
           </div>
           <h2><span>Hoặc</span></h2>
          </div>
          <div className="modal-footer">
            <img src={IconFB} className='iconFB' alt="" />
            <img src={IconGG} className='iconGG' alt="" />
            <img src={IconZalo} className='iconZalo' alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
