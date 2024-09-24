import React from "react";
import {Tilt }from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";


const ServiceCard = ( { index,title,icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
         options={{ max : 45,
          scale: 1,
          speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12
            min-h-[280px] flex flex-col justify-evenly items-center"
         >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
         </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-scondary text-[17px]
      max-w-3xl leading-[30px]"
      >
      I’m a dedicated Frontend Developer with a focus on creating smooth and
      dynamic user interfaces using the latest web technologies. Proficient in
      JavaScript, TypeScript, ReactJS, and Bootstrap, I turn design visions into
      clean, efficient, and interactive code. I’m committed to improving user
      experiences by staying current with advancements in frontend development
      and ensuring optimal performance and usability.I'm a  quick learner and collaborate 
      effectively with team members to deliver high-quality projects on time.
      Let's work together to having your Ideas into reality.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
