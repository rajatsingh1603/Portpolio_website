import React from 'react';
import { SocialData } from '../../Data/SocialData';
import './social.css'

function Social() {
    const data = SocialData;
  return <div className='social'>
        {data.map((item)=>{
            return (
                <a href={item.link}>
                <div className='social_icon_div'>
                    <img src={item.icon} className='social_icon' />
                </div>
                </a>
            )
        })}
  </div>;
}

export default Social;
