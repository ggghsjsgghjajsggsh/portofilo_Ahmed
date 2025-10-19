import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import "./Skills.css";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="icon html" /> },
  { name: "CSS", icon: <FaCss3Alt className="icon css" /> },
  { name: "JavaScript", icon: <FaJsSquare className="icon js" /> },
  { name: "React", icon: <FaReact className="icon react" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="icon bootstrap" /> },
  { name: "Git", icon: <FaGitAlt className="icon git" /> },
  { name: "GitHub", icon: <FaGithub className="icon github" /> },
];

export default function Skills() {
  return (
    <section className="skills-section">
      <h2 className="skills-title" id="Skills">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.2}}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, delay: index * 0.2 }}
            whileHover={{ scale: 1.1, rotate: 3 }}
          >
            {skill.icon}
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
