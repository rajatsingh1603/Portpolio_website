import React, { useState } from 'react';
import HeaderMobile from './mobile/HeaderMobile';
import HeaderWeb from './web/HeaderWeb';
import '../Header/header.css'

function Header() {
    const [isOpen,setIsOpen] = useState(false);
    return <div className='header'>
        <div className='name'>RAJAT SINGH JATAV</div>
        <div className='menu'>
            <div className='webMenu'>
                <HeaderWeb />
            </div>
            <div className='mobileMenu'>
                <div onClick={()=>setIsOpen(!isOpen)}>
                <i class="fi fi-rr-align-left hamburger"></i>
                </div>
                {isOpen && <HeaderMobile isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>
        </div>
    </div>;
}

export default Header;
