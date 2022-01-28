import React from 'react';
import Seprator from '../../comman/Seprator';
import './contact.css'
import Social from '../../comman/Social';


function Contact() {
  return <div className='contact'>
      <Seprator />
      <label className='section_title'>Contact</label>
      <div className='contact_container'>
          <div className='contact_left'>
            <Social />
          </div>
          <div className='download'>
            <a download href={require('../../../assets/resume.pdf').default}>
            <i class="fi fi-rr-download"></i>Download Resume
            </a>
          </div>
      </div>
  </div>;
}

export default Contact;
