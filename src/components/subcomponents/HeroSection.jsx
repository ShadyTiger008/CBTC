import React from 'react';
import { projectData } from '../../HomeData';
import { Link } from 'react-router-dom';

const HeroSection = ({theme}) => {
  return (
    <main className='flex flex-col'>
        <section className='flex flex-col items-center'>
            {projectData.map((curElem) => {
                const { id, title, name, imgSrc, description, repoLink, linkUrl, style } = curElem;
                return (
                    <div key={id} className={`${style} space-y-10 space-x-10 p-10 hover:shadow-xl md:w-[1500px] my-10 rounded-xl`}>
                        <div className='flex flex-col justify-center space-y-4'>
                            <span className='font-semibold font-rock'>{title}</span>
                            <h1 className='text-5xl font-bold font-lobster'>{name}</h1>
                            <p className='text-lg font-medium font-lumanosimo'>{description}</p>
                            <div className='flex flex-row space-x-6'>
                                <Link to={repoLink} className={`bg-yellow-400 px-5 py-2 rounded-full font-semibold border border-black hover:border-b-[8px] duration-200 ${theme=== 'dark' ? 'border-gray-200' : ''}`}>Check the Code</Link>
                                <Link to={linkUrl} className={`bg-yellow-400 px-5 py-2 rounded-full font-semibold border border-black hover:border-b-[8px] duration-200 ${theme=== 'dark' ? 'border-gray-200' : ''}`}>Watch Live</Link>
                            </div>
                        </div>
                        <div className='px-10'>
                            <img src={imgSrc} alt={name} className='w-[800px] rounded-xl hover:scale-95 duration-300'/>
                        </div>
                    </div>
                )
            })}
        </section>
    </main>
  )
}

export default HeroSection