import React from 'react'
import { BallCanvas } from "./canvas";
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from '../styles';
import { Tilt } from 'react-tilt';

const ServiceCard = ({index, name, icon}) => {
  return (
    <Tilt className="xs:w-[100px] w-[100px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card">
          <div
          options={{
            max:45,
            scale:1,
            speed:2000
          }}
          className="bg-[#FFEBCD] rounded-[20px] py-1 px-1 min-h-[100px] flex justify-evenly items-center flex-col">
            <img src ={icon} alt={name} className=' w-20 h-20 object-contain'/>
          </div>
      </motion.div>
    </Tilt>
  )
}

const Tech = () => {
  return (
    <div>
      <motion.div
      variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[#FFEBCD]`}>Technologies I have worked with</p>
        <h2 className={`${styles.sectionHeadText} text-[#FFEBCD]`}>Tech.</h2>
      </motion.div>
    <div className='flex flex-row mt-20 flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <ServiceCard key = {technology.name} index = {index} 
        {...technology}/>
      ))}
    </div>
    </div>
  )
}

export default SectionWrapper(Tech, "")