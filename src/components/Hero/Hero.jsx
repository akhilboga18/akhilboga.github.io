import React, { useEffect } from 'react'
import { BiDownArrowAlt } from 'react-icons/bi';
import ProfilePic from '../../assets/profile_pic.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';

function Hero() {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, []);

    return (
        <section id='home' className='flex min-h-[85vh] flex-col lg:flex-row items-center justify-center p-2 md:p-5 mt-6 overflow-x-hidden'>
            {/* left */}
            <div className="flex flex-col items-center lg:items-start justify-center basis-1/2 text-gray-500 p-8 gap-3">
                <h1 data-aos='fade-up' className='text-3xl md:text-5xl font-bold text-gray-300'>Akhil B</h1>
                <h2 data-aos='fade-up' className='text-lg md:text-xl font-semibold text-gray-400'>Data Analyst</h2>
                <p data-aos='fade-up' className='text-sm md:text-base'>Hi, I'm Akhil, an aspiring data analyst with a strong desire to learn and grow,
                    I am excited to bring my passion and dedication to the field. I am currently enrolled in Refocus,
                    the top data analytics bootcamp in the Philippines, where I have gained a solid foundation in tools
                    such as Excel, SQL, Power BI, and Python.</p>
                <div>
                    <button data-aos='fade-right' className='bg-[#714feb] p-3 px-5 transition-all duration-200 rounded-full text-gray-300 hover:text-gray-200 hover:border-2 hover:border-[#714feb] hover:bg-transparent'>
                        <a href="#about" className='flex gap-3 items-center'>
                            About Me <BiDownArrowAlt />
                        </a>
                    </button>
                </div>
            </div>
            {/* right */}
            <div className="flex basis-1/2 justify-center text-gray-500">
                <div data-aos='fade-left' className="flex border-2 border-gray-500 w-[270px] h-[270px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden">
                    {/* profile image */}
                    <img src={ProfilePic} alt="Profile Pic" className='bg-cover' />
                </div>
            </div>
        </section>
    )
}

export default Hero;