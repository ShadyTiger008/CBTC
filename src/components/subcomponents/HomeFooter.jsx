import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const HomeFooter = () => {
    return (
        <footer className='bg-gray-900 text-white py-10'>
            <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
                <div className='text-center md:text-left'>
                    <h3 className='text-2xl font-semibold mb-4'>Stay Connected</h3>
                    <p className='text-gray-400'>Subscribe to our newsletter to receive updates.</p>
                </div>
                <form className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
                    <input
                        type='email'
                        placeholder='Your Email'
                        className='bg-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <button
                        type='submit'
                        className='bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 text-white font-semibold transition duration-300'
                    >
                        Subscribe
                    </button>
                </form>
                <div className='flex space-x-4 mt-6 md:mt-0'>
                    <a href='#' className='hover:text-blue-500'>
                        <FaFacebook size={24} />
                    </a>
                    <a href='#' className='hover:text-blue-500'>
                        <FaTwitter size={24} />
                    </a>
                    <a href='#' className='hover:text-blue-500'>
                        <FaInstagram size={24} />
                    </a>
                </div>
            </div>
            <div className='text-center text-gray-400 mt-8'>
                &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
            </div>
        </footer>
    );
};

export default HomeFooter;
