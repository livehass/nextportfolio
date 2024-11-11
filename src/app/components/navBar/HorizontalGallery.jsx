import React from "react";
import { motion } from "framer-motion";

const items = ["one"];

const HorizontalGallery = ({ imageArray }) => {
  const itemVariants = {
    initial: { x: "-100vw", opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  return (
    <ul className="overflow-hidden mb-20">
      {items.map((item, i) => (
        <motion.li
          key={i}
          className="flex items-center text-center space-x-8  scrollbar-none overflow-hidden  mx-20 px-20 "
          variants={itemVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.9, delay: i * 5.8 }}
        >
          {imageArray.map((image) => (
            <div
              key={image.id}
              className="flex flex-col items-center w-10  group"
            >
              <span className="flex justify-center text-center mb-1 text-sm  uppercase opacity-0 group-hover:opacity-100 transition-opacity bg-secondary-500 group-hover:text-white antialiased font-bold px-0.5 duration-100">
                {image.alt || `Image ${image.id}`}
              </span>
              <img
                src={image.url}
                alt={image.alt || `Image ${image.id}`}
                className="w-full h-full object-cover animate-pulse transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 duration-300"
              />
            </div>
          ))}
        </motion.li>
      ))}
    </ul>
  );
};

export default HorizontalGallery;
