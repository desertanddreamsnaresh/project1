import React from "react";
import Image from 'next/image'

// import { Link } from "react-router-dom";
// import "../css/Blog.css";
import javascript from '../../public/javascript.png'
// import Blog1 from '../img/blog-01.jpg';
// import Blog2 from '../img/blog-02.jpg';
// import Blog3 from '../img/blog-03.jpg';



function Blog() {
  return (
    <div className="blog component__space" id="Blog">
      <div className="heading">
        <h1 className="heading">Latest News</h1>
        <p className="heading p__color">
          There are many variations of passages of Blogs available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>
      <div className="container">
          <div className="row">
              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <Image src={javascript} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">JavaScript</h5>
                         <h4 className="project__text">Getting tickets to the big show</h4>
                         <a href="#/" className="blog project__btn btn">Read More</a>
                         {/* <Link to="/javscript">Javscript</Link> */}
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                         <Image src={javascript} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Development</h5>
                         <h4 className="project__text">Getting tickets to the big show</h4>
                         <a href="#/" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

              <div className="col__3">
              <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                         <Image src={javascript} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                      <div className="Blog__meta absolute">
                         <h5 className="project__text">Development</h5>
                         <h4 className="project__text">Getting tickets to the big show</h4>
                         <a href="#/" className="blog project__btn btn">Read More</a>
                       </div>
                 </div>
              </div>

          </div>
      </div>
    </div>
  );
}

export default Blog;
