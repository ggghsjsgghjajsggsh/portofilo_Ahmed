import './main.css'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const myProjects = [
  { projectTitle: "react project", category: ["react"], description: "Lorem ipsum...", image: "/img/1.jpg" },
  { projectTitle: "react & css project", category: ["react" , "css"], description: "Lorem ipsum...", image: "/img/2.jpg" },
  { projectTitle: "css project", category: ["css"], description: "Lorem ipsum...", image: "/img/3.jpg" },
  { projectTitle: "react project", category: ["react"], description: "Lorem ipsum...", image: "/img/4.jpg" },
  { projectTitle: "css project", category: ["css"], description: "Lorem ipsum...", image: "/img/5.jpg" },
  { projectTitle: "javascript project", category: ["javascript"], description: "Lorem ipsum...", image: "/img/6.jpg" },
  { projectTitle: "node project", category: ["node"], description: "Lorem ipsum...", image: "/img/7.jpg" },
  { projectTitle: "node project", category: ["node"], description: "Lorem ipsum...", image: "/img/8.jpg" },
  { projectTitle: "javascript project", category: ["javascript"], description: "Lorem ipsum...", image: "/img/9.jpg" },
];

function Main() {

   
  const [active, setActive] = useState("all");
  const [projects, setProjects] = useState(myProjects);

  const handlclick = (buttonCategory) => {
    setActive(buttonCategory);
    if (buttonCategory === "all") {
      setProjects(myProjects);
    } else {
      const newArr = myProjects.filter((item) =>
        item.category.includes(buttonCategory)
      );
      setProjects(newArr);
    }
  };

  return (
    
    <main className='flex' id='Projects'>
      <section className='left-section'>
        
        <button
          onClick={() => handlclick("all")}
          className={active === "all" ? "active" : ""}
        >
          All Projects
        </button>
        <button onClick={() => handlclick("css")} className={active === "css" ? "active" : ""}>
          HTML & CSS
        </button>
        <button onClick={() => handlclick("javascript")} className={active === "javascript" ? "active" : ""}>
          Javascript
        </button>
        <button onClick={() => handlclick("react")} className={active === "react" ? "active" : ""}>
          React & MUI
        </button>
        <button onClick={() => handlclick("node")} className={active === "node" ? "active" : ""}>
          Node & Express
        </button>
      </section>

      <section className='right-section'>
      <AnimatePresence mode="wait">
  {projects.map((item) => (
    <motion.article
      key={`${item.projectTitle}-${item.image}`}
      className="card"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1.05 }}
      exit={{ opacity: 0, scale: 0.6 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <img width={240} src={item.image} alt="" loading='lazy' />
      <div style={{ width: "240px" }} className="box">
        <h1 className="title">{item.projectTitle}</h1>
        <p className="subtitle">{item.description}</p>
        <div className="icons">
          <div className="icon-box">
            <a href=""><div className="icon-link"></div></a>
            <a href="https://github.com/ggghsjsgghjajsggsh"><div className="icon-github"></div></a>
          </div>
          <a className="more" href="">
            more
            <div className="icon-arrow_forward"></div>
          </a>
        </div>
      </div>
    </motion.article>
  ))}
</AnimatePresence>

      </section>
    </main>
  );
}

export default Main;
