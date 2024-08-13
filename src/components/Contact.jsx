import React from 'react'
import { useState, useRef } from 'react';
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    message: '',
  })
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_ih6vawd', 
      'template_58ki4oi', 
      {
        from_name: form.name,
        to_name: 'Zahra',
        to_email: 'bukhaz99@gmail.com',
        message: form.message,
      },
      'XGmzqPmsL_fzc6eTU')
      .then(()=>{
        setLoading(false);
        alert('Thank you. I will get back to you ASAP.');
        setForm({
          name: '',
          message: ''
        })
      }, (error => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong.')
      }));
  }

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
      variants={slideIn('left', "tween", 0.2, 1)}
      className='flex-[0.75] bg-[#001100] p-8 rounded-2xl'>
        <p className={`${styles.sectionSubText} text-[#FFEBCD]`}>Get in Touch</p>
        <h3 className={`${styles.sectionHeadText} text-[#FFEBCD]`}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-[#FFEBCD] font-medium mb-4'>Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className='bg-black py-4 px-6 placeholder:text-[#b3a58f] text-[#FFEBCD] rounded-lg outline-none border-none font-medium'
                />
            </label>
            <label className='flex flex-col'>
              <span className='text-[#FFEBCD] font-medium mb-4'>Message</span>
              <textarea
                rows="6"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind? Include a return email."
                className='bg-black py-4 px-6 placeholder:text-[#b3a58f] text-[#FFEBCD] rounded-lg outline-none border-none font-medium'
                />
            </label>
            <button 
              type="submit"
              className='bg-black py-3 px-8 outline-non w-fit text-[#FFEBCD] font-bold shadow-md shadow-primary rounded-xl'
              >
              {loading ? 'Sending...' : 'Send'}
            </button>
        </form>
      </motion.div>
      <motion.div
      variants={slideIn('right', "tween", 0.2, 1)}
      className='xl:flex-1 w-[50%] xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");