import {motion} from 'framer-motion';
import {styles} from '../styles';
import {ComputersCanvas} from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div>
          <h1 className={`${styles.heroHeadText} text-[#FFEBCD] typing`}>Hello, I'm <span className='text-[#009900]' >Zahra</span>!</h1>
          <p className={`${styles.heroSubText} m-2 text-[#FFEBCD]`}>I am a software engineer based in Houston, TX. My main skills are machine learning, embedded systems, and fullstack development.</p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className='absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#009900] flex justify-center items-start p-2'>
            <motion.div
              animate={{
                  y:[0,24,0]
                }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: 'loop'
                  }}
                  className="w-3 h-4 rounded-full bg-[#009900] mb-1"
                />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero