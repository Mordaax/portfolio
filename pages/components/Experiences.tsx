import React from 'react'
import experienceData from '@/public/data/experiences.json'
import ExperienceEntry from './ExperienceEntry'


const Experiences = () => {
  return (
    <>
    <div id="experiences" className="rn-education-area rn-section-gap section-separator">
            <div className="tab-pane show active fade single-tab-area" id="education" role="tabpanel" aria-labelledby="education-tab">
                    <div className="personal-experience-inner" >
               
                     <div className="mx-auto col-lg-7 col-md-10 col-10 align-left" >
                        <div className="content">
                            <span className="subtitle">2017-2023</span>
                            <h4 className="maintitle">Experiences</h4>
                        </div>
                    </div>
                   
                    </div>
            </div>
            <div>
                
                
                <div className="mx-auto col-lg-8 col-md-10 col-10 align-self-center ">
                <div className="row mt--10 mx-auto ">
                    <div className=" col-lg-12 col-md-12 col-12 align-self-center">
                    
                        {
                            experienceData.experiences.map((experience)=>(
                                <ExperienceEntry date={experience.date} heading={experience.heading} subheading={experience.subheading} para={experience.para} image={experience.image} key={experience.id}/>
                            ))
                        }
                        
                       
                       
                    </div>
                </div>
                </div>
                
            </div>
        </div>
        </>
  )
}

export default Experiences