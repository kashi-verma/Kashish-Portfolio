"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Fidelio Feedback Application",
    description: "Feedback collection web application that genrates URL for authenticated users",
    image: "/images/projects/image1.png",
    tag: ["Fidelio", ],
    gitUrl: "https://github.com/kashi-verma/Fidelio-feedback-app",
    previewUrl: "https://fidelio-feedback-app-3pyw.vercel.app/",
  },
  {
    id: 2,
    title: "Banco - Online Banking Web Application",
    description: "Banco is a web application that provides online tranzactions facility and much more",
    image: "/images/projects/image2.png",
    tag: [ "Banco"],
    gitUrl: "https://github.com/kashi-verma/Horizon",
    previewUrl: "https://banking-jet.vercel.app/sign-in",
  },
  
  {
    id: 3,
    title: "Pet-Lovers an E-commerce Application",
    description: "At Pet Lovers' Choice we believe that whole, real, human grade ingredients create a pet food that will help your pets live a long, heathy, happy, and active",
    image: "/images/projects/image3.png",
    tag: [ "Pet-Lovers"],
    gitUrl: "https://github.com/kashi-verma/Pet-Lovers",
    previewUrl: "/",
  },
 
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Fidelio");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Fidelio"
          isSelected={tag === "Fidelio"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Banco"
          isSelected={tag === "Banco"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Pet-Lovers"
          isSelected={tag === "Pet-Lovers"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
