import React from 'react'

type CardProps = {
    date: string,
    heading: string,
    subheading: string,
    para: string
}


const AwardEntry = ({date, heading, subheading, para}:CardProps) => {
  return (
    <div className="experience-style-two col-12 col-lg-5 ">
      
        <div  className="experience-left"  style={{ flexBasis:'100%'}}>
           
            <div className="experience-center col-lg-12 col-12 col-xs-12" >
                <span className="date">{date}</span>
                <h4 className="experience-title" style={{marginBottom:'10px'}}>
                    {heading}
                </h4>
                <h6 className="subtitle" style={{marginTop:'0px'}}>
                    {subheading}
                </h6>
                <p className="disc">{para}</p>
            </div>
        
        </div>
        
       
    </div>
  )
}

export default AwardEntry