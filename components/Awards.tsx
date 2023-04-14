import React from 'react'
import awardData from '@/public/data/awards.json'
import AwardEntry from './AwardEntry'
//import AwardEntry from './AwardEntry'

const Awards = () => {
  return (
    <>
    <div id="awards" className="rn-education-area rn-section-gap section-separator">
            <div className="tab-pane show active fade single-tab-area" id="education" role="tabpanel" aria-labelledby="education-tab">
                    <div className="personal-experience-inner" >
               
                     <div className="mx-auto col-lg-7 col-md-10 col-10 align-left" >
                        <div className="content">
                            <span className="subtitle">2019-Current</span>
                            <h4 className="maintitle">Awards And Certifications</h4>
                        </div>
                    </div>
                   
                    </div>
            </div>
            <div >
                
                <div className="mx-auto col-lg-8 col-md-10 col-10 align-self-center">
                
                <div className="container ">
                    <div className="row justify-content-center">
                        {
                            awardData.awards.map((award)=>(
                                <AwardEntry date={award.date} heading={award.heading} subheading={award.subheading} para={award.para1} key={award.id}/>
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

export default Awards