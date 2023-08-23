import React, { useState, useEffect } from 'react';
import { projectData } from '../../HomeData';
import { Link } from 'react-router-dom';
import Homepage from '../../assets/homepage.jpg'
import Flower from '../../assets/flower.jpg';
import Dandelion from '../../assets/dandelion.jpg';
import Moon from "../../assets/moon.jpg";
import Homepage1 from "../../assets/homepage1.jpg";
import Homepage2 from "../../assets/homepage2.jpg";
import Black from '../../assets/black.jpg';
import White from '../../assets/white.jpg';
import WhiteBg from '../../assets/whitebg.jpg';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HeroSection = ({theme}) => {
    const [ showText, setShowText ] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > window.innerHeight/2) {
                setShowText(false)
            } else {
                setShowText(true)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);
    
  return (
    <main className='flex flex-col'>
        <section className='flex flex-col items-center'>
        <Parallax strength={600} bgImage={theme === 'dark' ? Black : White} className='w-screen h-screen object-cover'>
            <div className='fixed w-full h-screen flex justify-center items-center'>
                {showText && (
                    <div className='text-center'>
                        <h1 className='text-6xl font-bold'>Lorem Ipsum</h1>
                        <span className='text-3xl font-bold'>Lore Ipsum Lorem lobsetr kfjjh nkakfhiahf popop lofff sou mnhff looflls mimo mini</span>
                        <button>Checkout Projects</button>
                    </div>
                )}
            </div>
        </Parallax>
            {projectData.map((curElem) => {
                const { id, title, name, imgSrc, description, repoLink, linkUrl, style } = curElem;
                const [ref, inView] = useInView();
                const isEven = id % 2 === 0;
                const animationInitial = { x: isEven ? 1000 : -1000 };
                const animationAnimate = { x: 0 };
                return (
                    <motion.div 
                      initial={animationInitial}
                      whileInView={animationAnimate}
                      transition={{ duration: 1 }}
                      key={id}
                      className={`${style} space-y-10 space-x-10 p-10 hover:shadow-xl md:w-[1500px] my-10 rounded-xl`}
                    >
                        <div className='flex flex-col justify-center space-y-4'>
                            <span className='font-semibold font-rock'>{title}</span>
                            <h1 className='text-5xl font-bold font-lobster'>{name}</h1>
                            <p className='text-lg font-medium font-lumanosimo'>{description}</p>
                            <div className='flex flex-row space-x-6'>
                                <Link to={repoLink} className={`bg-yellow-400 px-5 py-2 rounded-full font-semibold border border-black hover:border-b-[8px] duration-200 ${theme === 'dark' ? 'border-gray-200' : ''}`}>Check the Code</Link>
                                <Link to={linkUrl} className={`bg-yellow-400 px-5 py-2 rounded-full font-semibold border border-black hover:border-b-[8px] duration-200 ${theme === 'dark' ? 'border-gray-200' : ''}`}>Watch Live</Link>
                            </div>
                        </div>
                        <div className='px-10'>
                            <img
                                src={imgSrc}
                                alt={name}
                                className='w-[800px] rounded-xl hover:scale-95 duration-300'
                            />
                            </div>

                        </motion.div>
                )
            })}
            <Parallax strength={-600} bgImage={theme === 'dark' ? Dandelion : WhiteBg} className='w-screen h-screen object-cover'>
            <div>
                <span>Home page</span>
            </div>
        </Parallax>
        </section>
    </main>
  )
}

export default HeroSection;
