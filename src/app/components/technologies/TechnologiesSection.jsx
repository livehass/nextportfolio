import React from "react";
import HorizontalGallery from "../navBar/HorizontalGallery";
import { motion } from "framer-motion";

const TechnologiesSection = () => {
  const imagesArray = [
    {
      id: 1,
      url: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/angular.svg",
      alt: "Agular",
    },
    {
      id: 2,
      url: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/react-color-white.svg",
      alt: "React",
    },
    {
      id: 3,
      url: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/nodedotjs.svg",
      alt: "Node",
    },
    {
      id: 4,
      url: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/css3-white.svg",
      alt: "CSS3",
    },
    {
      id: 5,
      url: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/html5_white.svg",
      alt: "HTML",
    },
    {
      id: 6,
      url: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/insomnia.svg",
      alt: "Insomnia",
    },
    {
      id: 7,
      url: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/figma.svg",
      alt: "FIGMA",
    },
    {
      id: 8,
      url: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/spring.svg",
      alt: "SpringBoot",
    },
    {
      id: 9,
      url: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/tailwindcss.svg",
      alt: "Tailwind",
    },
    {
      id: 10,
      url: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/javascriptlogo.svg",
      alt: "Javascript",
    },
    {
      id: 11,
      url: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/typescriptwhitelogo.svg",
      alt: "Typescript",
    },
    {
      id: 12,
      url: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/docker_white.svg",
      alt: "docker",
    },
    {
      id: 13,
      url: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/postgresql.svg",
      alt: "postgres",
    },
    {
      id: 14,
      url: "https://raw.githubusercontent.com/livehass/files/refs/heads/master/logos-portfolio/postman.svg",
      alt: "postman",
    },
  ];

  return (
    <main className="py-10  flex flex-col items-center overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center text-3xl font-bold  mt-10  text-transparent bg-clip-text bg-white"
      >
        Technologies I&apos;m Familiar With
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.6 }}
        className="border-b border-secondary-500 sm:flex-row items-center w-3/4"
      ></motion.div>
      <HorizontalGallery imageArray={imagesArray} />
    </main>
  );
};

export default TechnologiesSection;
