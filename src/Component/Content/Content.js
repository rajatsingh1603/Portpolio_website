import React from 'react';
import Skills  from './skills/Skills';
import Project from './projects/Project';
import About from './about/About';
import Contact from './contact/Contact';
import Work from './work/Work';
import './content.css';

function Content() {
  return <div className='content_body'>
      
      <section id='about'>
        <About />
      </section>

      <section id='project'>
        <Project />
      </section>

      <section id='skills'>
        <Skills />
      </section>

      <section id='work'>
        <Work />
      </section>

      <section id='contact'>
        <Contact />
      </section>

      

      

  </div>;
}

export default Content;
