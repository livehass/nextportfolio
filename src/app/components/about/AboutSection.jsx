"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const itemVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-4">
        <li>Java</li>
        <li>Javascript</li>
        <li>Typescript</li>
        <li>React</li>
        <li>Angular</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-4">
        <li className="">Software Development At Unip Universidade Paulista</li>
        <li>Bootcamp Fullstack At Generation.org</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-4">
        <li>Generation Fullstack JavaScript, React, TypeScript</li>
        <li>Front-end methodologies at Alura.com</li>
        <li>Back-end methodologies at Alura.com</li>
        <li></li>
        <li></li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      className="text-white md:py-20 md:pt-24 lg:pt-1 lg:py-5 sm:my-28 sm:py-28"
      id="about"
    >
      <div className="md:grid md:grid-cols-2 gap-2 items-center  xl:gap-12 xl:px-16 sm:mt-24 lg:mt-24 md:mt-24">
        <motion.div
          variants={itemVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          transition={{ delay: 0.1 }}
          className="rounded-lg sm:rounded md:h-full md:w-full sm:h-1/2 sm:w-1/2 flex items-center justify-center "
        >
          <Image
            src="/images/1.png"
            width="500"
            height="500"
            alt="About Me"
            className="object-cover md:h-full md:w-full rounded-lg sm:h-1/2 sm:w-1/2"
          />
        </motion.div>

        <div className="mt-2 md:mt-0 text-left flex flex-col h-full overflow-hidden max-w-2xl mx-auto">
          <motion.h2
            variants={itemVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-white mb-4"
          >
            About Me
          </motion.h2>
          <motion.p
            variants={itemVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            transition={{ delay: 0.3 }}
            className="text-base  leading-relaxed lg:text-lg flex-grow overflow-hidden"
          >
            I&apos;am a full-stack web developer passionate about building
            interactive, responsive applications. My skills include JavaScript,
            React, Redux, Node.js, Express, PostgreSQL, and Git. I specialize in
            front-end development, focusing on creating seamless user
            experiences. I&apos;m well-versed in agile methodologies, which help
            me deliver projects efficiently and collaborate effectively with
            teams. I&apos;m a quick learner who thrives in collaborative
            environments and am eager to contribute to impactful projects.
            Let&apos;s build something amazing together!
          </motion.p>

          <motion.div
            variants={itemVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            transition={{ delay: 0.5 }}
            className="flex flex-row justify-start space-x-2"
          >
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
              className="flex-grow"
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
              className="flex-grow"
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
              className="flex-grow"
            >
              Certifications
            </TabButton>
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            transition={{ delay: 0.4 }}
            className="mt-8 max-h-48 overflow-y-auto mb-9"
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
