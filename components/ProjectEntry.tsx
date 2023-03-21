import React ,{useState} from 'react'

type PropCard = {
    subheading: string,
    image: string,
    type: string,
    heading: string,
    para1:string,
    para2:string
}

const ProjectEntry = ({subheading, image, type, heading, para1, para2}: PropCard) => {
  
  const [Modaldismissed, setModaldismissed] = useState(true)
 const style={
    display: 'block'
  };
  const style2={
    display:'none'
  }
  return (
    <>
    <div className="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-12 col-12 mt--30 border-8">
        <div className="rn-blog" data-toggle="modal" data-target="#exampleModalCenters">
            <div className="inner">
                <div className="thumbnail">
                    <a href="javascript:void(0)">
                        <img src={'/images/' + image} width='200px' height='200px' alt="Personal Portfolio Images"/>
                    </a>
                </div>
                <div className="content">
                    <div className="category-info">
                        <div className="category-list">
                            <a href="javascript:void(0)">{subheading}</a>
                        </div>
                        <div className="meta">
                            <span><i className="feather-clock"></i> 2 min read</span>
                        </div>
                    </div>
                    <h4 className="title"><a href="javascript:void(0)"  onClick={()=>{setModaldismissed(false); }} >{heading}
                            <i className="feather-arrow-up-right"></i></a></h4>
                </div>
            </div>
        </div>
    </div>
    <div className="modal"  role="dialog" aria-hidden="true" style={Modaldismissed ? style2 : style}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header ">
                        <button type="button" className="close mt-3" data-dismiss="modal" aria-label="Close">
                            <span  onClick={()=>{setModaldismissed(true); }}>X</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row align-items-center">

                            <div className="col-lg-6">
                                <div className="portfolio-popup-thumbnail">
                                    <div className="image">
                                        <img className="w-100" src={'/images/' + image} alt="slide"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="text-content">
                                    <h3>
                                        <span>{type}</span> {heading}
                                    </h3>
                                    <p className="mb--30">{para1}</p>
                                    <p>{para2}</p>
                                    <div className="button-group mt--20">
                                        <a href="#" className="rn-btn thumbs-icon">
                                            <span>LIKE THIS</span>
                                            <i data-feather="thumbs-up"></i>
                                        </a>
                                        <a href="#" className="rn-btn">
                                            <span>VIEW PROJECT</span>
                                            <i data-feather="chevron-right"></i>
                                        </a>
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

export default ProjectEntry