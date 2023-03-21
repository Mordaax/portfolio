import React ,{useState,useEffect} from 'react'

const Header = () => {
    const [menuOpen ,setMenuOpen] = useState(false)
    
    
    const style={
        transform: 'translate3d(0, 0, 0)',
        backgroundColor: 'rgba(33,36,40, 0.7)',
    color: 'white',
    position: 'fixed',
    top: 0,
    left: 0,
    height:'100px',
    
    padding: 0,
    margin: 0
    }
  return ( 
  <>
    <header className="rn-header haeder-default black-logo-version header--sticky" style={style as React.CSSProperties}>
    <div className="header-wrapper rn-popup-mobile-menu m--0 row align-items-center">
          
          <div className="col-lg-2 col-6">
              <div className="header-left">
                  <div className="logo">
                      <a href="index.html">
                          
                      </a>
                  </div>
              </div>
          </div>
      
          <div className="col-lg-10 col-6">
              <div className="header-center">
                  <nav id="sideNav" className="mainmenu-nav navbar-example2 d-none d-xl-block">
                
                      <ul className="primary-menu nav nav-pills">
                          <li className="nav-item"><a className="nav-link smoth-animation" href="#home">Home</a></li>
                          <li className="nav-item"><a className="nav-link smoth-animation" href="#education">Education</a></li>
                          <li className="nav-item"><a className="nav-link smoth-animation" href="#experiences">Experiences</a></li>
                          <li className="nav-item"><a className="nav-link smoth-animation" href="#projects">Projects</a></li>
                      </ul>
                
                  </nav>
            
                  <div className="header-right">

                      <div className="hamberger-menu d-block d-xl-none">
                          <i id="menuBtn" className="feather-menu humberger-menu" onClick={()=>setMenuOpen(!menuOpen)}></i>
                      </div>

                      <div className="close-menu d-block">
                          <span className="closeTrigger">
                              <i data-feather="x"></i>
                          </span>
                      </div>
                  </div>
          

              </div>
          </div>
  
      </div>
    </header>
    
    <div className={menuOpen? 'popup-mobile-menu menu-open' : 'popup-mobile-menu' } >
        <div className="inner" >
            <div className="menu-top" >
                <div className="menu-header" >
                 
                    <div className="close-button float-right" style={{marginRight:'0' , marginLeft:'auto'}}>
                        
                        <button className="close-menu-activation close" style={{color:'#5e8eff',fontWeight:'1px'}} onClick={()=>setMenuOpen(!menuOpen)}>
                        <a href="javascript:void(0)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </a>
                        </button>
                     
                       
                    </div>
                </div>
                <p className="discription">Lorem ipsum dolor sit amet consect adipisicing elit repellendus.
                </p>
            </div>
            <div className="content" >
                <ul className="primary-menu nav nav-pills">
                    

                    <li className="nav-item"><a className="nav-link smoth-animation" href="#home">Home</a></li>
                          <li className="nav-item"><a className="nav-link smoth-animation" href="#education">Education</a></li>
                          <li className="nav-item"><a className="nav-link smoth-animation" href="#experiences">Experiences</a></li>
                          <li className="nav-item"><a className="nav-link smoth-animation" href="#projects">Projects</a></li>
                </ul>
              
                <div className="social-share-style-1 mt--40">
                    <span className="title">find with me</span>
                    <ul className="social-share d-flex liststyle">
                        <li className="facebook"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg></a>
                        </li>
                        <li className="instagram"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg></a>
                        </li>
                        <li className="linkedin"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg></a>
                        </li>
                    </ul>
                </div>
       
            </div>
        </div>
        <div style={{width:'100',height:'100vh'}} onClick={()=>setMenuOpen(!menuOpen)}></div>
    </div>
    </>
  )
}

export default Header