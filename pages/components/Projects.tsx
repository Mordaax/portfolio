import React from 'react'
import projectdata from './../data/projects'
import ProjectEntry from './ProjectEntry'

const Projects = () => {
  return (
    <>
        <div id="projects" className="rn-portfolio-area portfolio-style-three rn-section-gap section-separator" >
            <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                       
                            <h2 className="title">Projects</h2>
                        </div>
                    </div>
                </div>
                <div className='mx-auto col-10 align-self-center'>
                <div className="row row--25 mt--30 mt_md--10 mt_sm--10">
                    
                    {
                        projectdata.projects.map(
                            (project) => (
                                <ProjectEntry data={project} key={project.id}/>
                            )
                        )
                    }
                   

                
      
                </div>
                </div>
                
            </div>
        </div>

    
    </>
  )
}

export default Projects