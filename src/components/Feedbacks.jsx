import {motion} from 'framer-motion';
import {styles} from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard = ({index, testimonial, name, designation, company, image}) =>(
  <motion.div 
  variants={fadeIn("","spring", index * 0.5, 0.75)}
  className='bg-[#001100] p-10 rounded-3xl xs:w-[320px] w-full'>
    <p className='text-[#FFEBCD] font-black text-[48px]'>"</p>
    <div className='mt-1'>
    <p className='text-[#FFEBCD] tracking-wider text-[18px]'>{testimonial}</p>
    <div className='mt-7 flex justify-between items-center gap-1'>
      <div className='text-[#FFEBCD] flex-1 flex flex-col'>
        <p className='font-medium text-[16px]'>
          <span className='green-text-gradient'>@</span> {name}
        </p>
        <p className='mt-1 text-[12px]'>
          {designation} from {company}
        </p>
        </div>
        <img 
        src={image}
        alt={`feedback-by-${name}`}
        className='w-10 h-10 rounded-full object-cover'/>
      </div>
    </div>
  </motion.div>
)
const Feedbacks = () => {
  return (
    <div className='-mt-12 bg-black rounded-[20px]'>
      <div className={`${styles.padding} bg-black rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-[#FFEBCD]`}>
            Kind Endorsements from coworkers and project partners
          </p>
          <h2 className={`${styles.sectionHeadText} text-[#FFEBCD]`}>
            Testimonials.
          </h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) =>(
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Feedbacks, "");