import React, { useState } from 'react'

const Education = () => {
    const [shown, setShown] =useState(false)
    function toggleText() {
        setShown(current => !current)
      }
  return (
    <>
    <div className="rn-resume-area rn-section-gap section-separator" id="education" >

        <div className="row" >
            <div className="col-lg-12" >
            <div className="rn-nav-content tab-content" id="myTabContents" >
        <div className="tab-pane show active fade single-tab-area"  id="education" role="tabpanel" aria-labelledby="education-tab">
            <div className="personal-experience-inner" >
                <div className="row" >

                    <div className="mx-auto col-lg-7 col-md-10 col-10 align-self-center">
                        <div className="content">
                            <span className="subtitle">2017-2023</span>
                            <h4 className="maintitle">Education</h4>
                            <div className="experience-list">

                                <div className="resume-single-list">
                                    <div className="inner">
                                        <div className="heading">
                                            <div className="title">
                                                <h4>Diploma In Cybersecurity and Digital Forensics</h4>
                                                <span>Ngee Ann Polytechnic(2021 - 2024)</span>
                                            </div>
                                            <div className="date-of-time">
                                                <span>3.94/4, 13 Distinctions</span>
                                            </div>
                                        </div>
                                        <p className="description cursor-pointer text-slate-300">This experience served as an opportunity for me to acquire a diverse set of competencies and methodologies encompassing various areas including programming, cloud computing, computer networking, malware analysis, ethical hacking, and cyber forensics. 
                                        <a className="read-more-description" onClick={toggleText}>{shown ? ' Read Less...':' Read More...'}</a>
                                        {
                                            shown &&
                                            <> <br/>
                                        <br/> - Ngee Ann Polytechnic Scholarship 
                                        <br/> - Directors List: 1.2, 2.1, 2.2 
                                        <br/> - Diploma Plus: Certificate in Advanced Computing Mathamatics
                                        
                                        <br/> - The Christeria Programme: Took part in the Youth Exploration Program, Temasek Foundation Scale Program, and TCP Camp, which provided me with a wide-ranging and diverse set of experiences, and also facilitated the development of crucial life skills such as effective time management and networking.
                                        <br/> - Overflow, Nullsec, Orion Student Interest Group
                                        <br/> - Chess Club
                                        
                                        </>
                                        }
                                        
                                        </p>
                                        
                                    </div>
                                </div>
                              
                                <div className="resume-single-list">
                                    <div className="inner">
                                        <div className="heading">
                                            <div className="title">
                                                <h4>O Levels</h4>
                                                <span>Nan Chiau High School (2017 - 2020)</span>
                                            </div>
                                            <div className="date-of-time">
                                                <span>L1R5 7</span>
                                            </div>
                                        </div>
                                        <p className="description">
                                            - Infocomm Club: Learned different technologies such as gamemaker, javascript and took part in several competitions
                                            <br/> - Sports Leader
                                            
                                        </p>
                                    </div>
                                </div>
                                
                        

                            </div>
                        </div>
                    </div>

                    
                    
                </div>
            </div>
        </div>
      </div>
            </div>
        </div>
      
    
     </div>
    </>
  )
}

export default Education