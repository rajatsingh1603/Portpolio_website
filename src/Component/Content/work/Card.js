import React from 'react';
import '../projects/project-card.css'

function Card({ item }) {
    return <div className='project-card'>
        <div className='project_card_text'>
            <label className='project_title'>{item.company}</label>
            <div className='project_links'>
                <a className='project_link'>
                    <div className='link_button'>
                        <label>{item.startmonth}</label>-<label>{item.endmonth}</label>
                    </div>
                </a>
            </div>
            <p>{item.work}</p>

            
        </div>
        <img src={item.companylogo} className='project_card_image' />
    </div>;
}

export default Card;
