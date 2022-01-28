import React from 'react';
import { SkillsData } from '../../../Data/SkillsData';
import Seprator from '../../comman/Seprator';
import SkillCard from './SkillCard';
import './skills.css'

function Skills() {
    const data = SkillsData;
  return <div className='skills'>
      <Seprator />
      <label className='section_title' >Skills</label>
      <div className='skills_container'>
        {data.map((item)=>{
            return(
                <div className='skills_section'>
                    <label className='skill_type'>{item.type}</label>
                    <div className='skill_list'>
                        {item.list.map((skill)=>{
                            return (
                                <SkillCard skill={skill} />
                            )
                        })}
                    </div>
                </div>
            )
        })}
      </div>
  </div>;
}

export default Skills;
