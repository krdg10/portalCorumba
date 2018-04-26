import React from 'react'
import ImagemUmF from '../../public/img/portfolio/fullsize/1.jpg'
import ImagemUm from '../../public/img/portfolio/thumbnails/1.jpg'
import ImagemDoisF from '../../public/img/portfolio/fullsize/2.jpg'
import ImagemDois from '../../public/img/portfolio/thumbnails/2.jpg'
import ImagemTresF from '../../public/img/portfolio/fullsize/3.jpg'
import ImagemTres from '../../public/img/portfolio/thumbnails/3.jpg'
import ImagemQuatroF from '../../public/img/portfolio/fullsize/4.jpg'
import ImagemQuatro from '../../public/img/portfolio/thumbnails/4.jpg'
import ImagemCincoF from '../../public/img/portfolio/fullsize/5.jpg'
import ImagemCinco from '../../public/img/portfolio/thumbnails/5.jpg'
import ImagemSeisF from '../../public/img/portfolio/fullsize/6.jpg'
import ImagemSeis from '../../public/img/portfolio/thumbnails/6.jpg'

export default props => (
    <section className="p-0" id="portfolio">
    <div className="container-fluid p-0">
      <div className="row no-gutters popup-gallery">
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href={ImagemUmF}>
            <img className="img-fluid img-size" src={ImagemUm} alt="" />
            <div className="portfolio-box-caption">
              <div className="portfolio-box-caption-content">
                <div className="project-category text-faded">
               
                </div>
                <div className="project-name">
                  
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href={ImagemDoisF}>
            <img className="img-fluid img-size" src={ImagemDois} alt="" />
            <div className="portfolio-box-caption">
              <div className="portfolio-box-caption-content">
                <div className="project-category text-faded">
               
                </div>
                <div className="project-name">
                
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href={ImagemTresF}>
            <img className="img-fluid img-size" src={ImagemTres} alt="" />
            <div className="portfolio-box-caption">
              <div className="portfolio-box-caption-content">
                <div className="project-category text-faded">
              
                </div>
                <div className="project-name">
                 
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href={ImagemQuatroF}>
            <img className="img-fluid img-size" src={ImagemQuatro} alt="" />
            <div className="portfolio-box-caption">
              <div className="portfolio-box-caption-content">
                <div className="project-category text-faded">
                 
                </div>
                <div className="project-name">
                
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href={ImagemCincoF}>
            <img className="img-fluid img-size" src={ImagemCinco} alt="" />
            <div className="portfolio-box-caption">
              <div className="portfolio-box-caption-content">
                <div className="project-category text-faded">
                 
                </div>
                <div className="project-name">
                 
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 col-sm-6">
          <a className="portfolio-box" href={ImagemSeisF}>
            <img className="img-fluid img-size" src={ImagemSeis} alt="" />
            <div className="portfolio-box-caption">
              <div className="portfolio-box-caption-content">
                <div className="project-category text-faded">
             
                </div>
                <div className="project-name">
                 
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>

)