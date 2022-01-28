import React from 'react';
import { ProjectData } from '../../../Data/ProjectData';
import ProjectCard from './ProjectCard';
import '../projects/project.css'
import Seprator from '../../comman/Seprator';

function Project() {
    const data = ProjectData;
  return <div className='projects'>
  <Seprator />
      <label className='section_title'>Projects</label>
    <div >
        {data.map((project) =>{
            return (
                <ProjectCard project={project} />
            )
        })}
    </div>
  </div>;
}

export default Project;
