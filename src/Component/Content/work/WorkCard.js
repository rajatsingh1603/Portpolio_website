import React from 'react';
import './work-card.css';

function WorkCard({item}) {
  return <div className='work_card'>
      <img src={item.companylogo} className="work_logo" />
      <div className='work_info'>
          <label className='company_name'>{item.company}</label>
          <div className='work_date'>
            <label>{item.startmonth}</label>-<label>{item.endmonth}</label>
          </div>
          <div className='work_desc'>
            <p>{item.work}</p>
          </div>
      </div>
  </div>;
}

export default WorkCard;
