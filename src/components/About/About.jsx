import React, { useEffect } from 'react'
import { BiDownload } from 'react-icons/bi';
import Resume from '../../assets/AkhilBoga_DataAnalyst_Resume.pdf';
import AboutImg from '../../assets/112.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);

  return (
    <section id='about' className='flex flex-col gap-5 p-3 md:p-12 md:mt-1 mt-8'>
      <h1 data-aos='fade-up' className='text-xl font-semibold text-gray-300 tracking-widest'>ABOUT ME</h1>

      <div className="flex flex-col lg:flex-row items-center justify-center">
        {/* left */}
        <div className="flex basis-1/2 items-center justify-center p-5">
          <img
            data-aos='fade-right'
            className='rounded-lg'
            src={AboutImg}
            alt="About img" />
        </div>

        {/* right */}
        <div data-aos='fade-left' className="flex basis-1/2 flex-col gap-3 p-5">
          <p className='text-sm md:text-base text-gray-400'>Hi, I'm Akhil, an aspiring data analyst with a strong desire to learn and grow,
            I am excited to bring my passion and dedication to the field. Senior Data Analyst with over 5 years of experience in data management, analysis, and visualization. Expert in designing ETL
            pipelines and analyzing customer data to support business decisions. Proficient in utilizing Python, SQL, and Tableau for creating
            advanced BI reports and insightful dashboards. Demonstrated ability to improve data quality, streamline processes, and drive
            revenue growth through data-driven insights.</p>
          <p className='text-sm md:text-base text-gray-400'>In addition to my formal education, I have also taken the initiative to continue learning and developing my skills through
            online courses and virtual internships. I am confident that my strong foundation and eagerness to learn will enable me to excel
            as a data analyst and make valuable contributions to any organization.</p>
          <p className='text-sm md:text-base text-gray-400'>Checkout my resume by clicking down below.</p>
          <div>
            <button className='flex items-center bg-[#714feb] p-3 px-5 transition-all rounded-full text-gray-300 hover:text-gray-200 hover:bg-transparent hover:border-2 hover:border-[#7e61e7]'>
              <a
                className='flex items-center gap-3'
                href={Resume}
                download='AkhilBoga_DataAnalyst_Resume.pdf'>
                Download Resume <BiDownload />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;