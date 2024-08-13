import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import {motion} from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import {styles} from '../styles';
import{experiences} from '../constants';
import{ SectionWrapper } from '../hoc';
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement 
    contentStyle={{background:'#001100', color:'#fff'}}
    contentArrowStyle={{ borderRight:'7px solid #001100'}}
    
    date={experience.date}
    dateClassName="text-[#FFEBCD]"
    iconStyle={{background: experience.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full text-[#FFEBCD]">
        <img 
          src={experience.icon}
          alt={experience.company_name}
          className="w-[100%] h-[100%] rounded-full object-contain"/>
      </div>
    }
    >
      <div>
        <h3 className="text-[#009900] text-[24px] font-bold">{experience.title}</h3>
        <p className="text-[#FFEBCD] text-[16px] font-semibold" style={{margin:0}}>{experience.company_name}</p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point,index) => (
            <li key={`experience-point-${index}`}
            className="text-[#FFEBCD] text[14px] pl-1 tracking-wider">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
    
)
const Experience = () => {
  return (
    <>
    <motion.div
    variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-[#FFEBCD]`}>What I have done so far</p>
      <h2 className={`${styles.sectionHeadText} text-[#FFEBCD]`}>Experience.</h2>
    </motion.div>
    <div className="mt-20 flex flex-col">
      <VerticalTimeline lineColor={"#009900"}>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience}/>
        ))}
      </VerticalTimeline>

    </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")