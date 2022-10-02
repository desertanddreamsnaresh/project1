import React, {useState} from "react";
// import "../css/Home.css";
import Image from 'next/image'
import logo from "../../public/logo copy.png";

function Home() {
  // fixed Header
  // window.addEventListener("scroll", function () {
  //   const header = document.querySelector(".header");
  //   header.classList.toggle("active", window.scrollY > 0);
  // });
  // Toogle Menu
   const [show, setShow] = useState(true);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            {/* <Image src={logo} alt="logo" layout='fill' width="10px" height="10px"/> */}
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Services</li>
              </a>
                 <a href="#Skills">
                <li className="nav__items mx__15">Skills</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Portfolio</li>
              </a>
              <a href="#Blog">
                <li className="nav__items mx__15">Blog</li>
              </a>
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>
          {show ? null :(
          <div className="sideNavbar">
              <ul className="sidebar d__flex">
              <li className="sideNavbar">
              <a href="#home">Home</a>
            </li>
            <li className="sideNavbar">
              <a href="#about">About</a>
            </li>
            <li className="sideNavbar">
              <a href="#services">Services</a>
            </li>
            <li className="sideNavbar">
              <a href="#skills">Skills</a>
            </li>
            <li className="sideNavbar">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="sideNavbar">
              <a href="#blog">Blog</a>
            </li>
            <li className="sideNavbar">
              <a href="#contact">Contact</a>
            </li>
              </ul>
          </div>
           ) }
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi, I’m Naresh Panwar</h2>
              <h3 className="home__text sweet pz__10">Full Stack Developer.</h3>
      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;