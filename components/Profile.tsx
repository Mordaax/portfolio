import React from 'react'
import Viewer from './ViewerComponent'

const Profile = () => {
  return (
    <>
    <div id="home" className="rn-slide-area">
            <div className="slide slider-style-3 ">
                <div className="container ">
                    <div className='mx-auto col-11 align-self-center'>
                    <div className="row slider-wrapper">
                        <div className="order-2 order-xl-1 col-lg-12 col-xl-5 mt_lg--50 mt_md--50 mt_sm--70">
                            <div className="slider-info ">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-12">
                                        <div className="user-info-top">
                                            <div className="user-info-header">
                                                
                                                <h2 className="title">
                                                    Hi, I’m <span>Cyrus</span>
                                                </h2>
                                                <p className="disc">Year 2 Cybersecurity Student At Ngee Ann Polytechnic</p>
                                            </div>
                                            <div className="user-info-footer">
                                                <div className="info">
                                                    <i data-feather="file"></i>
                                                    <span>Outgoing, Inquisitive Learner</span>
                                                </div>
                                                <div className="info">
                                                    <i data-feather="mail"></i>
                                                    <span></span>
                                                </div>
                                                <div className="info">
                                                    <i data-feather="map-pin"></i>
                                                    <span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-12 col-lg-12 col-12">
                                        <div className="user-info-bottom">
                                            <span>Contact</span>
                                            <div className="button-wrapper d-flex">
                                                <a className="rn-btn mr--30" href=""><span>DOWNLOAD CV</span></a>
                                                <a className="rn-btn" href="mailto:cyrustan77@gmail.com"><span>CONTACT ME</span></a>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="order-1 order-xl-2 col-lg-12 col-xl-7">
                            <div className="background-image-area">
                                <div className="thumbnail-image">
                                  <Viewer/>
                                    
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

export default Profile