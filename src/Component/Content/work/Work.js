import React from 'react';
import { WorkData } from '../../../Data/WorkData';
import Seprator from '../../comman/Seprator';
import './work.css'
import Card from '../work/Card'
// import WorkCard from './WorkCard';

function Work() {
    const data = WorkData;
  return <div className='work'>
      <Seprator />
      <label className='section_title'>Work</label>
      <div className='work_list'>
        {data.map((item)=>{
            return (
                <div>
                {/* <WorkCard item={item} /> */}
                <Card item={item} />
                </div>
            )
        })}
      </div>
  </div>;
}

export default Work;
