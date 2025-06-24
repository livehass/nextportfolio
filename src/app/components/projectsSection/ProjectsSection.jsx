"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "Travel backpack using LocalStorage",
    description:
      "A travel backpack checklist crafted with JavaScript, CSS, and HTML, integrating concepts such as localStorage and JSON data parsing. This application enables travelers to efficiently organize their travel essentials, storing the checklist items locally in the user's browser.",
    image: "/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/livehass/Travel-backpack-with-localStorage",
    previewUrl: "https://travel-backpack-with-local-storage.vercel.app/",
    technologies: [
      {
        id: 1,
        name: "JavaScript",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/javascriptlogo.svg",
      },
      {
        id: 2,
        name: "HTML",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/html5_white.svg",
      },
      {
        id: 3,
        name: "CSS",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/css3-white.svg",
      },
    ],
  },
  {
    id: 2,
    title: "Project for calculate imc",
    description:
      "The project consists of a list where you can add and delete patients, and determine the BMI (Body Mass Index) of each patient. It utilizes JavaScript, CSS, and HTML to create a dynamic interface. Users can add new patients to the list, providing their weight and height, which are then used to calculate their BMI",
    image: "/projects/2.png",
    tag: ["All", "Web"],
    previewUrl: "https://javascript-web-alura.vercel.app/",
    technologies: [
      {
        id: 1,
        name: "JavaScript",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/javascriptlogo.svg",
      },
      {
        id: 2,
        name: "HTML",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/html5_white.svg",
      },
      {
        id: 3,
        name: "CSS",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/css3-white.svg",
      },
    ],
  },
  {
    id: 3,
    title: "E-commerce Application",
    description:
      "Back-end of a E-commerce application using java and springboot",
    image: "/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/livehass/LojaDeGamesSpringFramework",
    technologies: [
      {
        id: 1,
        name: "Java",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/java.svg",
      },
      {
        id: 2,
        name: "SpringBoot",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/spring.svg",
      },
      {
        id: 3,
        name: "Maven",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/maven.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Personal blog fullstack app",
    description:
      "Fullstack app personal blog built in the bootcamp generation.org fullstack javaspring, react, typescript",
    image: "/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/livehass/blog-pessoal-react",
    previewUrl: "https://blog-pessoal-react-livehass.vercel.app/",
    technologies: [
      {
        id: 1,
        name: "Java",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/java.svg",
      },
      {
        id: 2,
        name: "SpringBoot",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/spring.svg",
      },
      {
        id: 3,
        name: "Maven",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/maven.svg",
      },
      {
        id: 5,
        name: "React",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/react-color-white.svg",
      },

      {
        id: 6,
        name: "Typescript",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/typescriptwhitelogo.svg",
      },
    ],
  },
  {
    id: 5,
    title: "Ecofamily E-comerce",
    description:
      "A digital e-commerce platform dedicated to selling healthy foods and fostering a growth-oriented community. Contributed to its development using front-end and back-end methodologies during the Generation.org bootcamp.",
    image: "/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Generation-ecoFamily",
    technologies: [
      {
        id: 1,
        name: "Java",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/java.svg",
      },
      {
        id: 2,
        name: "SpringBoot",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/spring.svg",
      },
      {
        id: 3,
        name: "Maven",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/maven.svg",
      },
      {
        id: 5,
        name: "React",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/react-color-white.svg",
      },

      {
        id: 6,
        name: "Typescript",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/typescriptwhitelogo.svg",
      },
    ],
  },
  {
    id: 6,
    title: "Fullstack App for personal goals",
    description:
      "A personal goals app project built with TypeScript, Fastify, and Drizzle ORM on the back end, and React with TypeScript on the front end.",
    image: "/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/livehass/personal-goals-app",
    technologies: [
      {
        id: 1,
        name: "JavaScript",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/javascriptlogo.svg",
      },
      {
        id: 2,
        name: "Typescript",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/typescriptwhitelogo.svg",
      },
      {
        id: 3,
        name: "React",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/react-color-white.svg",
      },

      {
        id: 4,
        name: "Tailwind",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/tailwindcss.svg",
      },
      {
        id: 4,
        name: "Fastfy",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/fastfy.svg",
      },
    ],    
      {
    id: 7,
    title: "XP Calculator up to Paragon 300 - Diablo 4",
    description:
      "A web-based XP calculator for Diablo 4 that helps players estimate the experience required to reach Paragon level 300. Users input their current level, the XP gained per Pit run, and the time per run. The tool outputs the remaining XP needed, the number of Pit runs required, and the total time to reach the goal.",
    image: "/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/livehass/Calculadora-de-XP-Paragon-300--Diablo4",
    previewUrl: "https://calculadora-de-xp-paragon-300-diabl.vercel.app/",
    technologies: [
         {
        id: 1,
        name: "JavaScript",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/javascriptlogo.svg",
      },
      {
        id: 2,
        name: "HTML",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/html5_white.svg",
      },
      {
        id: 3,
        name: "CSS",
        logo: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/css3-white.svg",
      },
       
    },
  ],
];
const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="md:pt-24 lg:mt-20">
      <h2 className="text-center text-4xl font-bold text-white mt-4   ">
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>

      <div className="flex justify-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20  lg:gap-12 ">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
