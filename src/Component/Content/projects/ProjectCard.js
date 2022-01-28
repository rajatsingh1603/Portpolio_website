import React from 'react';
import './project-card.css'

function ProjectCard({ project }) {
    return <div className='project-card'>
        <div className='project_card_text'>
            <label className='project_title'>{project.title}</label>
            <div className='project_links'>
                {project.demo && <a className='project_link' href={project.demo}>
                    <div className='link_button'>
                        <i class="fi fi-rr-globe"></i>Demo
                    </div>
                </a>
                }
                {project.github && <a className='project_link' href={project.github}>
                    <div className='link_button'>
                        <i class="devicon-github-original colored"></i>Github
                    </div>
                </a>}
            </div>
            <p>{project.about}</p>

            <div className='project_tags'>
                {project.tags.map((tag) => {
                    return (
                        <label className='tag'>{tag}</label>
                    )
                })}
            </div>
        </div>
        <img src={project.image} className='project_card_image' />
    </div>;
}

export default ProjectCard;
