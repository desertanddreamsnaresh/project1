import React from "react";
import Image from 'next/image'
// import "../css/Skills.css";
import HTML from "../../public/html.png";
import CSS from "../../public/css.png";
import JavaScript from "../../public/javascript.png";
import ReactImg from "../../public/react.png";
import Node from "../../public/node.png";
import FireBase from "../../public/firebase.png";
import GitHub from "../../public/github.png";
import Tailwind from "../../public/tailwind.png";
import Mongo from "../../public/mongo.png";
import Bootstrap from "../../public/bootstrap.png";

function Skills() {
  return (
    <div className="skills component__space" id="Skills">
      <div className="heading">
        <h1 className="heading">Skills</h1>
        {/* <p className="heading p__color">
          These are the technologies I've worked with
        </p> */}
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <Image src={HTML} alt="HTML icon" width="40px" height="40px"/>
              </div>
              {/* <div className="skills__meta">
                <p className="skills__text">HTML</p>
              </div> */}
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <Image src={CSS} alt="HTML icon" width="40px" height="40px"/>
              </div>
              {/* <div className="skills__meta">
                <h1 className="skills__text">CSS</h1>
              </div> */}
            </div>
          </div>


          <div className="col__3" >
            <div className="skills__box pointer" >
              <div className="icon">
                <Image src={Bootstrap} alt="HTML icon" width="40px" height="40px"/>
              </div>
              {/* <div className="skills__meta">
                <h1 className="skills__text">Bootstrap</h1>
              </div> */}
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <Image src={Tailwind} alt="HTML icon" width="40px" height="40px" />
              </div>
              {/* <div className="skills__meta">
                <h1 className="skills__text">Tailwind</h1>
              </div> */}
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <Image src={JavaScript} alt="HTML icon" width="40px" height="40px" />
              </div>
              {/* <div className="skills__meta">
                <h1 className="skills__text">JavaScript</h1>
              </div> */}
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <Image               
                  src={ReactImg}
                  alt="HTML icon"
                  width="40px" height="40px"
                />
              </div>
              {/* <div className="skills__meta">
                <h1 className="skills__text">React Js</h1>
              </div> */}
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <Image src={Node} alt="HTML icon" width="40px" height="40px"/>
              </div>
              {/* <div className="skills__meta">
                <h1 className="skills__text">Node</h1>
              </div> */}
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <Image src={GitHub} alt="HTML icon" width="40px" height="40px" />
              </div>
              {/* <div className="skills__meta">
                <h1 className="skills__text">GitHub</h1>
              </div> */}
            </div>
          </div>


          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <Image src={Mongo} alt="HTML icon" width="40px" height="40px" />
              </div>
              {/* <div className="skills__meta">
                <h1 className="skills__text">MongoDB</h1>
              </div> */}
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="icon">
                <Image src={FireBase} alt="HTML icon" width="40px" height="40px" />
              </div>
              {/* <div className="skills__meta">
                <h1 className="skills__text">FireBase</h1>
              </div> */}
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
}

export default Skills;
