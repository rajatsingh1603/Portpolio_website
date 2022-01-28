import React from 'react';
import '../mobile/headerMobile.css';

function HeaderMobile({ isOpen, setIsOpen }) {
  return <div className='header_mobile'>

    <div className='close_icon' onClick={() => setIsOpen(!isOpen)}>
      <i class="fi fi-rr-cross-circle"></i>
    </div>

    <div className='mobile_options'>
      <div className='mobile_option'>

        <a href='#project'>
          <i class="fi fi-rr-bulb option_icon" ></i>Projects
        </a>

      </div>

      <div className='mobile_option'>

        <a href='#skills'>
          <i class="fi fi-rr-laptop option_icon" ></i>Skills
        </a>

      </div>

      <div className='mobile_option'>

        <a href='#work'>
          <i class="fi fi-rr-briefcase option_icon" ></i>Work
        </a>

      </div>

      <div className='mobile_option'>

        <a href='#contact'>
          <i class="fi fi-rr-user option_icon" ></i>Contact
        </a>
      </div>
    </div>

  </div>;
}

export default HeaderMobile;
