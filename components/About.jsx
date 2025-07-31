import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[5%] sm:px-[8%] md:px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    >
      <motion.h4 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-Ovo'>
        Introduction</motion.h4>

      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-Ovo'>
        About me</motion.h2>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.8}}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <motion.div
            initial={{opacity: 0, scale: 0.9}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 0.6}}
            className='w-64 sm:w-80 rounded-3xl max-w-none self-start mt-10'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.15)] dark:shadow-[0_0_50px_rgba(255,255,255,0.07)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_60px_rgba(255,255,255,0.1)]'/>
            </motion.div>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.8}}
            className='flex-1 px-1'>
                <p className='mb-10 max-w-2xl font-Ovo text-left'>
                I am a passionate and self-driven Java Backend Developer currently pursuing a B.Tech in Computer Science and Engineering. I specialize in building scalable, maintainable backend systems using Java, Spring Boot, and microservices architecture. I've developed several real-world projects involving technologies like Kafka, Redis, Docker, PostgreSQL, and REST APIs, with a strong focus on clean code, modular design, and system performance.
                </p>
                <p className='mb-10 max-w-2xl font-Ovo text-left'>
                Alongside backend development, I have solved 600+ problems on LeetCode, which has sharpened my Data Structures and Algorithms (DSA) skills and strengthened my understanding of core computer science fundamentals, including OOP, OS, DBMS, and networking. I enjoy tackling engineering challenges, learning new tools and technologies, and contributing to impactful software solutions. I am currently seeking internship or full-time SDE opportunities where I can apply my skills, learn from experienced engineers, and grow as a developer.
                </p>

                <motion.ul
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.8, delay: 1}}
                className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index)=>(
                        <motion.li 
                        whileHover={{scale: 1.05}}
                        className='border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'
                         key={index}>
                            <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-2'/>
                            <h3 className='mt-3 mb-2 sm:my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                        </motion.li>
                    ))}
                </motion.ul>

                <motion.h4
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.5 }}
                className='my-6 text-gray-700 font-Ovo dark:text-white/80'>Tools I use</motion.h4>

                <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className='flex items-center gap-3 sm:gap-5'>
                    {toolsData.map((tool, index)=>(
                        <motion.li 
                        whileHover={{ scale: 1.1 }}
                        className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                         key={index}>
                            <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About
