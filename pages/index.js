import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from "./components/Navbar";
import About from "./components/About";
// import "./css/App.css";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Service from "./components/Service";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <div className={styles.container}>
  
       <Navbar/>
       <About />
       <Service />
       <Skills/>
       <Project />
       <Blog />
       <Contact />
       <Footer />

    </div>
  )
}
