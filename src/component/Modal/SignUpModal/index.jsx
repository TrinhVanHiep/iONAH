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
    modal = document.querySelector("#_signup-modal");
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
    <div className="_modal-signup" onClick={outsideClick}>
      <div id="_signup-modal" className="modal">
        <div className="modal-content">
            <span className="btn-close-signin" onClick={closeModal}>
              &times;
            </span>
          <div className="modal-header">
            <p>Đăng Ký</p>
          </div>
          <div className="modal-body">
           <Input className="sign-up-input" placeholder="Họ tên"/>
           <Input className="sign-up-input" placeholder="Số điện thoại"/>
           <Input className="sign-up-input" placeholder="Email"/>
           <Input className="sign-up-input" placeholder="Password"/>
           <Button className="btn-login">Đăng ký</Button>
           <h2><span>Hoặc</span></h2>
          </div>
          <div className="modal-footer">
            <img src={IconFB} className='iconFB' alt="" />
            <img src={IconGG} className='iconGG' alt="" />
            <img src={IconZalo} className='iconZalo' alt="" />
          </div>
          <div className="term-info">
            <span className="term">Bằng việc đăng ký, bạn đã đồng ý với iONAH về <a href=""> Điều khoản dịch vụ</a> &  <a href="">Chính sách bảo mật</a>  </span>
           </div>
          <p className="register-link">Đã có tài khoản? đăng nhập <a href="">tại đây</a></p>
        </div>
      </div>
    </div>
  );
}
