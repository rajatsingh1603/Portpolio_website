import React from 'react';
import '../web/headerWeb.css';

function HeaderWeb() {
  return <div className='header_web'>

    <div className='web_option'>

      <a href='#project'>
        <i class="fi fi-rr-bulb option_icon" ></i>Projects
      </a>

    </div>

    <div className='web_option'>

      <a href='#skills'>
        <i class="fi fi-rr-laptop option_icon" ></i>Skills
      </a>

    </div>

    <div className='web_option'>

      <a href='#work'>
      <i class="fi fi-rr-briefcase option_icon" ></i>Work
      </a>

    </div>

    <div className='web_option'>

      <a href='#contact'>
      <i class="fi fi-rr-user option_icon" ></i>Contact
      </a>
    </div>

  </div>;
}

export default HeaderWeb;
