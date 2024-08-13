import React from 'react';
import { Tilt } from 'react-tilt';
import {motion } from 'framer-motion';
import {styles} from '../styles';
import { services } from '../constants';
import { SectionWrapper } from "../hoc";
import {fadeIn, textVariant} from '../utils/motion';
const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full" >
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-green-gradient p-[1px] rounded-[20px] shadow-card">
          <div
          options={{
            max:45,
            scale:1,
            speed:450
          }}
          className="bg-[#001418] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col ">
            <img src ={icon} alt={title} className='w-16 h-16 object-contain'/>
            <h3 className='text-[#FFEBCD] text-[20px] font-bold text-center '>{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-[#FFEBCD]`}>Introduction</p>
      <h2 className={`${styles.sectionHeadText} text-[#FFEBCD]`}>About Me.</h2>
    </motion.div>
    <motion.p 
    variants={fadeIn("","", 0.1, 1)}
    className='mt-4 text-[#FFEBCD] text-[17px] max-w-3xl leading-[30px]'>
    I'm a Computer Science student at the University of Houston with a solid track record in software development and a knack for solving complex problems. My internship at Baylor College of Medicine sharpened my skills in C#, ASP.NET, and SQL, while my projects have ranged from building web apps to creating predictive models with Python, JavaScript, and C++. I’m driven, curious, and ready to tackle new challenges in tech.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10 '>
      {services.map((service, index) => (
        <ServiceCard key = {service.title} index = {index} 
        {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")