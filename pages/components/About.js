import React from "react";
import Image from 'next/image'

// import "../css/About.css";
import aboutImg from "../../public/about.jpg";
// import jsPDF from "jspdf";
// import pdf from '../img/resume.jpg';
function About() {
  //  Up To Top Btn
 const pdfGenerator = () => {
    var doc = new jsPDF('landscape','px','a4','false');
    doc.addImage(pdf, 'JPG',65,20,500,400)
    doc.save('resume.pdf')
  }
    // window.addEventListener("scroll", function(){
    //   const upToTop = document.querySelector("a.bottom__to__top");
    //    upToTop.classList.toggle("active", window.scrollY > 0)
    // });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <Image src={aboutImg} alt="" className="about__img"/>
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
              </p>
    
              <div className="about__button d__flex align__items__center">
                <a href="#/">
                  <button onClick={pdfGenerator} className="about btn pointer">Download Cv</button>
                </a>
                <a href="#/">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#/" className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
