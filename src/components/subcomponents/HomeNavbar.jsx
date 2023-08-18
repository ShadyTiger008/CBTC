import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenuLeft } from 'react-icons/cg';
import { SlClose } from 'react-icons/sl';
import { navBarLinks } from '../../HomeData';
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs';



const Navbar = ({theme, handleThemeSwitch}) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    
    const handleButton = () => {
        setToggleMenu(!toggleMenu);
        console.log("Button Clicked");
    };

    return (
        <nav className={`flex flex-row justify-between p-2 md:p-5 z-50 sm:h-[80px]`}> {/* Added h-[60px] for fixed height */}
            <div className='hidden sm:block font-prism text-4xl font-bold'>Shady Coder</div>
            {!toggleMenu && (<div className='md:hidden font-prism text-xl font-semibold'>Shady Coder</div>)}
            <ul className='hidden sm:flex flex-row lg:space-x-20 md:space-x-10 justify-center'>
                {navBarLinks.map((curElem) => {
                    const { name, linkTo } = curElem;
                    return (
                        <Link to={linkTo} className='font-pacifico font-bold text-6xl hover:underline hover:underline-offset-8' key={name}>
                            <li className='text-xl font-medium'>{name}</li>
                        </Link>
                    )
                })}
            </ul>
            <div className='hidden sm:flex flex-row space-x-4 items-center'>
                <div className='relative right-8 cursor-pointer' onClick={handleThemeSwitch}>
                    {theme === 'dark' ? <BsSunFill fontSize={20}/> : <BsFillMoonStarsFill fontSize={20}/>}
                </div>
                <button className={`bg-yellow-400 px-5 py-2 rounded-full border border-black hover:border-b-[6px] duration-200 text-sm font-semibold ${theme=== 'dark' ? 'border-gray-200' : ''}`}>Log In</button>
                <button className={`bg-yellow-400 px-5 py-2 rounded-full border border-black hover:border-b-[6px] duration-200 text-sm font-semibold ${theme=== 'dark' ? 'border-gray-200' : ''}`}>Sign Up</button>
            </div>
            {/* Mobile view hamburger button  */}
            <main className='flex flex-col md:hidden'>
                {!toggleMenu && (
                    <div className='md:hidden '>
                        <div className='absolute top-4 right-2' onClick={handleButton}>
                            <CgMenuLeft/>
                        </div>
                        <div className='relative top-2 right-8' onClick={handleThemeSwitch}>
                            {theme === 'dark' ? <BsSunFill/> : <BsFillMoonStarsFill/>}
                        </div>
                        
                    </div>
                )}
                {/* Mobile view if menu button clicked  */}
                {toggleMenu && (
                    <div className={`w-[100vw] h-[100vh] relative z-20 flex flex-col justify-center items-center ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white'}`}>
                        <SlClose onClick={() => setToggleMenu(false)} className='absolute top-2 right-4'/>
                        <div>
                            <ul className='flex flex-col text-3xl font-semibold space-y-6'>
                            {navBarLinks.map((curElem) => {
                                const { name, linkTo } = curElem;
                                return (
                                    <Link to={linkTo} key={name}>
                                        <li>{name}</li>
                                    </Link>
                                )
                            })}
                            </ul>
                        </div>
                        <div className='flex flex-row space-x-4 mt-10'>
                            <button className='bg-yellow-400 px-5 py-2 rounded-full border border-black hover:border-b-[8px] duration-200'>Log In</button>
                            <button className='bg-yellow-400 px-5 py-2 rounded-full border border-black hover:border-b-[8px] duration-200'>Sign Up</button>
                        </div>
                    </div>
                )}
            </main>
        </nav>
    );
}

export default Navbar;
