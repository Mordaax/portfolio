import React from 'react'
import Image from 'next/image'

type CardProps = {
    image: string,
    date: string,
    heading: string,
    subheading: string,
    para: string
}

const ExperienceEntry = ({date, heading, subheading, para, image} : CardProps) => {
  return (
    
   
    <div className="experience-style-two mx-auto mt-5">
        <div  className="experience-left row"  style={{ flexBasis:'100%'}}>
            <div className="experience-image col-lg-4 col-12">
            <Image
      src={'/images/'+image}
      width={500} height={500}
      alt="lol"
    />
                
            </div>
            <div className="experience-center col-lg-12 col-12 col-xs-12" >
                <span className="date">{date}</span>
                <h4 className="experience-title" style={{marginBottom:'10px'}}>
                    {heading}
                </h4>
                <h6 className="subtitle" style={{marginTop:'0px'}}>
                    {subheading}
                </h6>
                <p className="disc" style={{whiteSpace: 'pre-line',   verticalAlign: 'bottom'}}>{para}</p>
            </div>
        </div>
      
    </div>
    
  )
}

export default ExperienceEntry