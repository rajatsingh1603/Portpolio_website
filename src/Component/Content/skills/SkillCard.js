import React from 'react';
import './skill-card.css'

function SkillCard({skill}) {
  return <div className='skill_card'>
        <div className='skill_card_icon'>{skill.icon}</div>
        <div className='skill_card_name'>{skill.name}</div>
  </div>;
}

export default SkillCard;
